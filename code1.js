gdjs.New_32scene2Code = {};
gdjs.New_32scene2Code.GDNewObjectObjects1= [];
gdjs.New_32scene2Code.GDNewObjectObjects2= [];
gdjs.New_32scene2Code.GDNewObject2Objects1= [];
gdjs.New_32scene2Code.GDNewObject2Objects2= [];
gdjs.New_32scene2Code.GDNewObject3Objects1= [];
gdjs.New_32scene2Code.GDNewObject3Objects2= [];
gdjs.New_32scene2Code.GDNewObject4Objects1= [];
gdjs.New_32scene2Code.GDNewObject4Objects2= [];
gdjs.New_32scene2Code.GDrtObjects1= [];
gdjs.New_32scene2Code.GDrtObjects2= [];
gdjs.New_32scene2Code.GDrt2Objects1= [];
gdjs.New_32scene2Code.GDrt2Objects2= [];
gdjs.New_32scene2Code.GDNewObject5Objects1= [];
gdjs.New_32scene2Code.GDNewObject5Objects2= [];
gdjs.New_32scene2Code.GDNewObject6Objects1= [];
gdjs.New_32scene2Code.GDNewObject6Objects2= [];

gdjs.New_32scene2Code.conditionTrue_0 = {val:false};
gdjs.New_32scene2Code.condition0IsTrue_0 = {val:false};
gdjs.New_32scene2Code.condition1IsTrue_0 = {val:false};


gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32scene2Code.GDNewObject3Objects1});gdjs.New_32scene2Code.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32scene2Code.GDNewObject2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject2Objects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32scene2Code.GDNewObject3Objects1);

gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.New_32scene2Code.mapOfGDgdjs_46New_9532scene2Code_46GDNewObject3Objects1Objects, runtimeScene, true, false);
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.New_32scene2Code.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject3Objects1[i].setAnimationName("78");
}
}}

}


{


gdjs.New_32scene2Code.condition0IsTrue_0.val = false;
{
gdjs.New_32scene2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.New_32scene2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "New scene3", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rt"), gdjs.New_32scene2Code.GDrtObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDrtObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDrtObjects1[i].addPolarForce((gdjs.New_32scene2Code.GDrtObjects1[i].getDirectionOrAngle()), 32, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rt"), gdjs.New_32scene2Code.GDrtObjects1);
gdjs.copyArray(runtimeScene.getObjects("rt2"), gdjs.New_32scene2Code.GDrt2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDrt2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDrt2Objects1[i].addForceTowardObject((gdjs.New_32scene2Code.GDrtObjects1.length !== 0 ? gdjs.New_32scene2Code.GDrtObjects1[0] : null), 26, 0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rt"), gdjs.New_32scene2Code.GDrtObjects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDrtObjects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDrtObjects1[i].flipX(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("rt2"), gdjs.New_32scene2Code.GDrt2Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDrt2Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDrt2Objects1[i].flipX(true);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.New_32scene2Code.GDNewObject6Objects1);
{for(var i = 0, len = gdjs.New_32scene2Code.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.New_32scene2Code.GDNewObject6Objects1[i].flipX(true);
}
}}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


{


{
}

}


};

gdjs.New_32scene2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32scene2Code.GDNewObjectObjects1.length = 0;
gdjs.New_32scene2Code.GDNewObjectObjects2.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject3Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject4Objects2.length = 0;
gdjs.New_32scene2Code.GDrtObjects1.length = 0;
gdjs.New_32scene2Code.GDrtObjects2.length = 0;
gdjs.New_32scene2Code.GDrt2Objects1.length = 0;
gdjs.New_32scene2Code.GDrt2Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject5Objects2.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects1.length = 0;
gdjs.New_32scene2Code.GDNewObject6Objects2.length = 0;

gdjs.New_32scene2Code.eventsList0(runtimeScene);
return;

}

gdjs['New_32scene2Code'] = gdjs.New_32scene2Code;
