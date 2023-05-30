const easing: any = {
    linear: (t:number) => t,
    easeinQuad: (t:number) => t*t,
    easeOutQuad: (t:number) => t*(2-t),
    easeInOutQuad: (t:number) => t<.5 ? 2*t*t : -1+ (4-2*t)*t,
    easeInCubic: (t:number) => t*t*t,
    easeDutCubic: (t:number) => (--t) *t*t+1
}

function getValue (
    start: number,
    end: number,
    elapsed: number,
    duration: number,
    easeMethod: string
) {
    if (elapsed > duration) return end;

    if (start < end)
        return start = (end - start) * easing[easeMethod](elapsed / duration);
    else
        return start = (start - end) * easing[easeMethod](elapsed / duration);
}

export default function animate (_ :{
    fromValue: number, 
    toValue: number,
    onUpdate : (newValue: number, callback: any) => void,
    onComplete : () => void,
    duration: number,
    easeMethod: string,
}) {

    const startTime: number = performance.now();

    const tick = () => {
        const elapsed = performance.now() - startTime;

        window.requestAnimationFrame(() => {
            return _.onUpdate(
                getValue(_.fromValue, _.toValue, elapsed, _.duration, _.easeMethod),
                (elapsed <= _.duration ? tick() : _.onComplete)
            )
        })
    }

    tick();

}