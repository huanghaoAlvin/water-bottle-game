import { WaterBottle, WaterBottleColor } from "./water_bottle";
import { countBy, flatten, isEmpty, isEqual, last } from "lodash";

export class Combiner {
    private waterBottlesHistory: (WaterBottle[])[]
    private operationMemory: { waterBottles: WaterBottle[], steps: string[] }[] = []
    private bestSolution: string[] | undefined

    constructor(waterBottles: WaterBottle[]) {
        this.waterBottlesHistory = [waterBottles]
        this.checkWaterBottles(waterBottles)
    }
    private checkWaterBottles(waterBottles: WaterBottle[]) {
        const allColors = flatten(waterBottles.map(waterBottle => waterBottle.getColors()))
        const isValid = Object.values(countBy(allColors)).every(item => item === 4)
        if (!isValid) {
            console.log(countBy(allColors))
            throw new Error()
        }
    }
    private isOk(newHistory: WaterBottle[]) {
        return newHistory.every(waterBottle => waterBottle.isEmpty() || waterBottle.isOk())
    }
    private isWaterBottleEqual(left: WaterBottle, right: WaterBottle) {
        return isEqual(left.getColors(), right.getColors())
    }
    private isOperationEqual(leftHistory: WaterBottle[], rightHistory: WaterBottle[]) {
        return leftHistory.every((left, index) => {
            const right = rightHistory[index]
            return this.isWaterBottleEqual(left, right)
        })
    }
    private isOpreationRepeat(waterBottles: WaterBottle[], currentSteps: string[]) {
        const targetMemory = this.operationMemory.find((memory) => {
            return this.isOperationEqual(memory.waterBottles, waterBottles)
        })
        if (targetMemory) {
            const { steps } = targetMemory
            if (steps.length > currentSteps.length) targetMemory.steps = currentSteps
        } else {
            this.operationMemory.push({ waterBottles, steps: currentSteps })
        }
        return { isRepeat: !!targetMemory, bestSteps: targetMemory?.steps || currentSteps }
    }
    private cloneWaterBottle(origin: WaterBottle) {
        return new WaterBottle(origin.getColors())
    }
    private tryOpreation(from: WaterBottle, to: WaterBottle) {
        /**
         * 无法操作的几种情况
         * from
         *     已经ok
         *     为空
         * to
         *     已经ok
         *     已经满了
         * 两者顶部的颜色不同
         * 4. 目标玻璃瓶顶部的颜色和来源玻璃瓶顶部颜色不同
         */
        if (from.isOk() || from.isEmpty()) return
        if (to.isOk() || to.isFull()) return
        if (!to.isEmpty() && (last(to.getColors()) !== last(from.getColors()))) return

        // 如果from是pure并且to是空，那其实没必要操作
        if (from.isPure() && to.isEmpty()) return

        // 克隆from和to
        const clonedFrom = this.cloneWaterBottle(from)
        const clonedTo = this.cloneWaterBottle(to)

        const fromTop = last(clonedFrom.getColors())

        const needToTransferColor = () => {
            /**
             * 还能进行转移的条件
             * 1. from不为空
             * 2. to还没饱和
             * 3. 如果to为空，则不比较颜色
             * 4. 如果to不为空，则from的顶部颜色必须等于to的顶部颜色
             */
            if (clonedFrom.isEmpty()) return false
            if (clonedTo.isFull()) return false
            if (!isEmpty(clonedTo.getColors()) && last(clonedFrom.getColors()) !== last(clonedTo.getColors())) return false
            return true
        }

        while (needToTransferColor()) {
            clonedTo.push(clonedFrom.pop() as WaterBottleColor)
        }

        const finalFromTop = last(clonedFrom.getColors())

        if (finalFromTop === fromTop) return

        return last(this.waterBottlesHistory)?.map(waterBottle => {
            if (waterBottle === from) return clonedFrom
            if (waterBottle === to) return clonedTo
            return waterBottle
        })
    }
    private search(steps: string[]): string[] | undefined {
        // 如果解法比已知最优解长，就没必要求解了
        if (this.bestSolution && steps.length >= this.bestSolution.length) return this.bestSolution

        const currentHistory = last(this.waterBottlesHistory)
        // 穷举法
        for (let [leftIndex, leftWaterBottle] of currentHistory?.entries() || []) {
            for (let [rightIndex, rightWaterBottle] of currentHistory?.entries() || []) {
                // 自己不能和自己操作
                if (leftIndex === rightIndex) continue

                const currentSteps = last(steps) === `${rightIndex + 1} -> ${leftIndex + 1}` ? [...steps.slice(0, -1), `${leftIndex + 1} -> ${rightIndex + 1}`] : [...steps, `${leftIndex + 1} -> ${rightIndex + 1}`]

                // 尝试操作，如果行得通会产生一个新的历史
                const newHistory = this.tryOpreation(leftWaterBottle, rightWaterBottle)
                if (!newHistory) continue

                // 如果新解法产生了，需要对比新解法的长度，如果更短，则更新
                if (this.isOk(newHistory)) {
                    if (!this.bestSolution || this.bestSolution.length > currentSteps.length) console.log(currentSteps, currentSteps.length)
                    if (!this.bestSolution || this.bestSolution.length > currentSteps.length) this.bestSolution = currentSteps
                }

                // 如果本次操作和之前的历史有重复，会引发死循环，应该避免进入递归
                const { isRepeat, bestSteps } = this.isOpreationRepeat(newHistory, currentSteps)
                if (isRepeat) continue

                this.waterBottlesHistory.push(newHistory)
                const searchResult = this.search(bestSteps)
                this.waterBottlesHistory.pop()

                if (!this.bestSolution) this.bestSolution = searchResult
                if (this.bestSolution?.length && searchResult?.length && this.bestSolution.length > searchResult.length) this.bestSolution = searchResult
            }
        }
        return this.bestSolution
    }
    public start() {
        const steps = this.search([])
        console.log(steps, `一共有 ${steps?.length} 个步骤`)
    }
}