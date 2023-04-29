/*
    统一为一个定时器，处理相同时间的定时轮训，可同时多个函数
*/

export class RotationListeners {
    timerKey:NodeJS.Timeout|null = null;
    rotationMap = new Map();
    time = 1000;
    immediately = true; // 是否立即执行
    constructor(time?: number, immediately?: boolean) {
        time && this.setTime(time);
        typeof immediately === 'boolean' && this.setImmediately(immediately);
        return this;
    }
    addRotation(req: Function, cb?: Function) {
        this.rotationMap.set(req, cb);
        return this;
    }
    setTime(time: number) {
        this.time = time;
        return this;
    }
    setImmediately(immediately: boolean) {
        this.immediately = immediately;
        return this;
    }
    clearRotation(key:Function) {
        this.rotationMap.has(key) && this.rotationMap.delete(key);
        return this;
    }
    clearAllRotation() {
        this.rotationMap.clear();
        return this;
    }
    timeFun() {
        this.rotationMap.forEach(async (value, key) => {
            const res = await key();
            value?.(res);
        });
    }
    timer() {
        this.timerKey = setTimeout(() => {
            this.timeFun();
            this.timer();
        }, this.time);
    }
    startRotation(immediately: boolean = this.immediately) {
        if (this.timerKey) {
            return this;
        }
        if (immediately) {
            this.timeFun();
        }
        this.timer();
        return this;
    }
    stopRotation() {
        this.timerKey && clearTimeout(this.timerKey);
        this.timerKey = null;
        return this;
    }
}
