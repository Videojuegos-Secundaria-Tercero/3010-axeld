gdjs.New_32scene3Code = {};
gdjs.New_32scene3Code.GDNewObjectObjects1= [];
gdjs.New_32scene3Code.GDNewObjectObjects2= [];
gdjs.New_32scene3Code.GDNewObject2Objects1= [];
gdjs.New_32scene3Code.GDNewObject2Objects2= [];
gdjs.New_32scene3Code.GDNewObject3Objects1= [];
gdjs.New_32scene3Code.GDNewObject3Objects2= [];
gdjs.New_32scene3Code.GDNewObject4Objects1= [];
gdjs.New_32scene3Code.GDNewObject4Objects2= [];
gdjs.New_32scene3Code.GDNewObject5Objects1= [];
gdjs.New_32scene3Code.GDNewObject5Objects2= [];
gdjs.New_32scene3Code.GDNewObject6Objects1= [];
gdjs.New_32scene3Code.GDNewObject6Objects2= [];
gdjs.New_32scene3Code.GDNewObject7Objects1= [];
gdjs.New_32scene3Code.GDNewObject7Objects2= [];
gdjs.New_32scene3Code.GDNewObject8Objects1= [];
gdjs.New_32scene3Code.GDNewObject8Objects2= [];
gdjs.New_32scene3Code.GDNewObject9Objects1= [];
gdjs.New_32scene3Code.GDNewObject9Objects2= [];
gdjs.New_32scene3Code.GDNewObject10Objects1= [];
gdjs.New_32scene3Code.GDNewObject10Objects2= [];
gdjs.New_32scene3Code.GDNewObject11Objects1= [];
gdjs.New_32scene3Code.GDNewObject11Objects2= [];

gdjs.New_32scene3Code.conditionTrue_0 = {val:false};
gdjs.New_32scene3Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene3Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject11Objects1Objects = Hashtable.newFrom({"NewObject11": gdjs.New_32scene3Code.GDNewObject11Objects1});gdjs.New_32scene3Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.New_32scene3Code.GDNewObject6Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject6Objects1[i].flipX(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene3Code.GDNewObject3Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject3Objects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.New_32scene3Code.GDNewObject11Objects1);

gdjs.New_32scene3Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene3Code.mapOfGDgdjs_46New_9532scene3Code_46GDNewObject11Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene3Code.GDNewObject11Objects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene", false);
}{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject11Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject11Objects1[i].playAnimation();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject11"), gdjs.New_32scene3Code.GDNewObject11Objects1);
{for(var i = 0, len = gdjs.New_32scene3Code.GDNewObject11Objects1.length ;i < len;++i) {
    gdjs.New_32scene3Code.GDNewObject11Objects1[i].pauseAnimation();
}
}}

}


};

gdjs.New_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene3Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene3Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene3Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject6Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject7Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject7Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject8Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject8Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject9Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject9Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject10Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject10Objects2.length = 0;
gdjs.New_32scene3Code.GDNewObject11Objects1.length = 0;
gdjs.New_32scene3Code.GDNewObject11Objects2.length = 0;

gdjs.New_32scene3Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene3Code'] = gdjs.New_32scene3Code;
