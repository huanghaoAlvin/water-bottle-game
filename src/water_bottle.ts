import { uniq } from "lodash"

export enum WaterBottleColor {
    深蓝, 浅蓝, 深绿, 浅绿, 青, 红, 紫, 褐, 橙, 粉, 灰, 黄
}

export class WaterBottle {
    private colors: WaterBottleColor[]
    constructor(colors: WaterBottleColor[]) {
        this.colors = colors || []
    }
    public getColors() {
        return [...this.colors]
    }
    public getSpareVolume() {
        return Math.min(4 - this.colors.length, 4)
    }
    public isFull() {
        return this.getSpareVolume() === 0
    }
    public push(color: WaterBottleColor) {
        this.colors = [...this.colors, color]
    }
    public pop() {
        return this.colors.pop()
    }
    public isEmpty() {
        return this.colors.length === 0
    }
    public isPure() {
        return uniq(this.colors).length === 1
    }
    public isOk() {
        return this.isFull() && this.isPure()
    }
}