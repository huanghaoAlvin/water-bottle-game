import { Combiner } from "./combiner";
import { WaterBottle, WaterBottleColor } from "./water_bottle";

// 73
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.浅蓝, WaterBottleColor.浅绿, WaterBottleColor.褐, WaterBottleColor.浅绿],
//     [WaterBottleColor.深绿, WaterBottleColor.浅绿, WaterBottleColor.黄, WaterBottleColor.深绿],
//     [WaterBottleColor.深蓝, WaterBottleColor.黄, WaterBottleColor.深蓝, WaterBottleColor.褐],
//     [WaterBottleColor.浅蓝, WaterBottleColor.红, WaterBottleColor.灰, WaterBottleColor.灰],
//     [WaterBottleColor.黄, WaterBottleColor.紫, WaterBottleColor.褐, WaterBottleColor.灰],
//     [WaterBottleColor.深绿, WaterBottleColor.浅蓝, WaterBottleColor.紫, WaterBottleColor.深蓝],
//     [WaterBottleColor.红, WaterBottleColor.浅绿, WaterBottleColor.红, WaterBottleColor.深绿],
//     [WaterBottleColor.紫, WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.红],
//     [WaterBottleColor.灰, WaterBottleColor.黄, WaterBottleColor.紫, WaterBottleColor.浅蓝],
//     [],
//     []
// ].map(item => item.reverse())

// 75
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.浅蓝, WaterBottleColor.深蓝, WaterBottleColor.浅绿, WaterBottleColor.红],
//     [WaterBottleColor.黄, WaterBottleColor.紫, WaterBottleColor.紫, WaterBottleColor.紫],
//     [WaterBottleColor.浅绿, WaterBottleColor.青, WaterBottleColor.青, WaterBottleColor.褐],
//     [WaterBottleColor.褐, WaterBottleColor.黄, WaterBottleColor.深绿, WaterBottleColor.深绿],
//     [WaterBottleColor.红, WaterBottleColor.黄, WaterBottleColor.浅蓝, WaterBottleColor.红],
//     [WaterBottleColor.深蓝, WaterBottleColor.浅蓝, WaterBottleColor.深绿, WaterBottleColor.褐],
//     [WaterBottleColor.褐, WaterBottleColor.青, WaterBottleColor.深绿, WaterBottleColor.紫],
//     [WaterBottleColor.浅蓝, WaterBottleColor.浅绿, WaterBottleColor.深蓝, WaterBottleColor.红],
//     [WaterBottleColor.深蓝, WaterBottleColor.黄, WaterBottleColor.青, WaterBottleColor.浅绿],
//     [],
//     []
// ].map(item => item.reverse())

// 76
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.粉, WaterBottleColor.紫, WaterBottleColor.深绿, WaterBottleColor.褐],
//     [WaterBottleColor.青, WaterBottleColor.黄, WaterBottleColor.橙, WaterBottleColor.粉],
//     [WaterBottleColor.灰, WaterBottleColor.青, WaterBottleColor.紫, WaterBottleColor.青],
//     [WaterBottleColor.深绿, WaterBottleColor.青, WaterBottleColor.褐, WaterBottleColor.黄],
//     [WaterBottleColor.深绿, WaterBottleColor.灰, WaterBottleColor.橙, WaterBottleColor.橙],
//     [WaterBottleColor.黄, WaterBottleColor.红, WaterBottleColor.灰, WaterBottleColor.紫],
//     [WaterBottleColor.灰, WaterBottleColor.橙, WaterBottleColor.粉, WaterBottleColor.褐],
//     [WaterBottleColor.红, WaterBottleColor.紫, WaterBottleColor.深绿, WaterBottleColor.褐],
//     [WaterBottleColor.黄, WaterBottleColor.粉, WaterBottleColor.红, WaterBottleColor.红],
//     [],
//     []
// ].map(item => item.reverse())

// 77
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.橙, WaterBottleColor.紫, WaterBottleColor.深绿, WaterBottleColor.灰],
//     [WaterBottleColor.深绿, WaterBottleColor.红, WaterBottleColor.深蓝, WaterBottleColor.红],
//     [WaterBottleColor.灰, WaterBottleColor.浅蓝, WaterBottleColor.褐, WaterBottleColor.粉],
//     [WaterBottleColor.橙, WaterBottleColor.浅蓝, WaterBottleColor.深蓝, WaterBottleColor.粉],
//     [WaterBottleColor.灰, WaterBottleColor.深绿, WaterBottleColor.橙, WaterBottleColor.红],
//     [WaterBottleColor.深蓝, WaterBottleColor.灰, WaterBottleColor.紫, WaterBottleColor.深蓝],
//     [WaterBottleColor.褐, WaterBottleColor.粉, WaterBottleColor.褐, WaterBottleColor.粉],
//     [WaterBottleColor.浅蓝, WaterBottleColor.紫, WaterBottleColor.橙, WaterBottleColor.红],
//     [WaterBottleColor.褐, WaterBottleColor.浅蓝, WaterBottleColor.紫, WaterBottleColor.深绿],
//     [],
//     []
// ].map(item => item.reverse())

// 78
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.青, WaterBottleColor.灰, WaterBottleColor.青, WaterBottleColor.橙],
//     [WaterBottleColor.黄, WaterBottleColor.粉, WaterBottleColor.浅蓝, WaterBottleColor.浅蓝],
//     [WaterBottleColor.灰, WaterBottleColor.橙, WaterBottleColor.橙, WaterBottleColor.浅绿],
//     [WaterBottleColor.青, WaterBottleColor.粉, WaterBottleColor.灰, WaterBottleColor.褐],
//     [WaterBottleColor.浅绿, WaterBottleColor.橙, WaterBottleColor.粉, WaterBottleColor.褐],
//     [WaterBottleColor.灰, WaterBottleColor.浅绿, WaterBottleColor.黄, WaterBottleColor.浅蓝],
//     [WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.浅绿, WaterBottleColor.深蓝],
//     [WaterBottleColor.深蓝, WaterBottleColor.粉, WaterBottleColor.黄, WaterBottleColor.青],
//     [WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.黄, WaterBottleColor.浅蓝],
//     [],
//     []
// ].map(item => item.reverse())

// 79
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.褐, WaterBottleColor.褐, WaterBottleColor.紫, WaterBottleColor.深蓝],
//     [WaterBottleColor.浅蓝, WaterBottleColor.浅绿, WaterBottleColor.深绿, WaterBottleColor.浅绿],
//     [WaterBottleColor.紫, WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.橙],
//     [WaterBottleColor.浅蓝, WaterBottleColor.褐, WaterBottleColor.青, WaterBottleColor.深绿],
//     [WaterBottleColor.橙, WaterBottleColor.橙, WaterBottleColor.红, WaterBottleColor.深蓝],
//     [WaterBottleColor.青, WaterBottleColor.青, WaterBottleColor.紫, WaterBottleColor.浅绿],
//     [WaterBottleColor.浅蓝, WaterBottleColor.橙, WaterBottleColor.浅蓝, WaterBottleColor.深绿],
//     [WaterBottleColor.深绿, WaterBottleColor.青, WaterBottleColor.红, WaterBottleColor.浅绿],
//     [WaterBottleColor.红, WaterBottleColor.深蓝, WaterBottleColor.紫, WaterBottleColor.红],
//     [],
//     []
// ].map(item => item.reverse())

// 残局挑战1
// const initialWaterBottles: (WaterBottleColor[])[] = [
//     [WaterBottleColor.红, WaterBottleColor.红, WaterBottleColor.红],
//     [WaterBottleColor.黄, WaterBottleColor.黄, WaterBottleColor.黄, WaterBottleColor.黄],
//     [WaterBottleColor.紫, WaterBottleColor.褐, WaterBottleColor.深蓝, WaterBottleColor.浅蓝],
//     [WaterBottleColor.浅蓝, WaterBottleColor.橙, WaterBottleColor.红, WaterBottleColor.紫],
//     [WaterBottleColor.深蓝, WaterBottleColor.深蓝, WaterBottleColor.橙],
//     [WaterBottleColor.紫, WaterBottleColor.褐, WaterBottleColor.浅蓝, WaterBottleColor.紫],
//     [],
//     [WaterBottleColor.橙, WaterBottleColor.橙, WaterBottleColor.深蓝, WaterBottleColor.浅蓝],
//     [WaterBottleColor.褐, WaterBottleColor.褐, WaterBottleColor.深绿],
//     [WaterBottleColor.灰, WaterBottleColor.灰, WaterBottleColor.灰, WaterBottleColor.灰],
//     [WaterBottleColor.深绿, WaterBottleColor.深绿, WaterBottleColor.深绿],
// ].map(item => item.reverse())

const initialWaterBottles: (WaterBottleColor[])[] = [
    [1, 2, 4, 8],
    [2, 6, 1, 0],
    [8, 2, 6, 8],
    [3, 4, 5, 7],
    [1, 6, 0, 9],
    [5, 2, 3, 3],
    [4, 5, 7, 9],
    [0, 9, 8, 0],
    [5, 4, 6, 1],
    [3, 7, 9, 7],
    [],
    [],
].map(item => item.reverse())

const waterBottles = initialWaterBottles.map(colors => new WaterBottle(colors))

const combiner = new Combiner(waterBottles)
combiner.start()