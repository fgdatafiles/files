
// This file is just a concatenation of the three files in the src folder:
//    loadrube.js
//    RubeScene.js
//    rube-phaser.js

/*
* Author: Chris Campbell - www.iforce2d.net
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
*/

var b2CircleShape = box2d.b2CircleShape,
	b2EdgeChainDef = box2d.b2EdgeChainDef,
	b2EdgeShape = box2d.b2EdgeShape,
	b2MassData = box2d.b2MassData,
	b2PolygonShape = box2d.b2PolygonShape,
	b2ChainShape = box2d.b2ChainShape,
	b2Shape = box2d.b2Shape,
	b2CircleContact = box2d.b2CircleContact,
	b2Contact = box2d.b2Contact,
	b2ContactConstraint = box2d.b2ContactConstraint,
	b2ContactConstraintPoint = box2d.b2ContactConstraintPoint,
	b2ContactEdge = box2d.b2ContactEdge,
	b2ContactFactory = box2d.b2ContactFactory,
	b2ContactRegister = box2d.b2ContactRegister,
	b2ContactResult = box2d.b2ContactResult,
	b2ContactSolver = box2d.b2ContactSolver,
	b2EdgeAndCircleContact = box2d.b2EdgeAndCircleContact,
	b2NullContact = box2d.b2NullContact,
	b2PolyAndCircleContact = box2d.b2PolyAndCircleContact,
	b2PolyAndEdgeContact = box2d.b2PolyAndEdgeContact,
	b2PolygonContact = box2d.b2PolygonContact,
	b2PositionSolverManifold = box2d.b2PositionSolverManifold,
	b2Body = box2d.b2Body,
	b2_staticBody = box2d.b2BodyType.b2_staticBody,
	b2_kinematicBody = box2d.b2BodyType.b2_kinematicBody,
	b2_dynamicBody = box2d.b2BodyType.b2_dynamicBody,
	b2BodyDef = box2d.b2BodyDef,
	b2ContactFilter = box2d.b2ContactFilter,
	b2ContactImpulse = box2d.b2ContactImpulse,
	b2ContactListener = box2d.b2ContactListener,
	b2ContactManager = box2d.b2ContactManager,
	b2Draw = box2d.b2Draw,
	b2DestructionListener = box2d.b2DestructionListener,
	b2FilterData = box2d.b2FilterData,
	b2Fixture = box2d.b2Fixture,
	b2FixtureDef = box2d.b2FixtureDef,
	b2Island = box2d.b2Island,
	b2TimeStep = box2d.b2TimeStep,
	b2World = box2d.b2World,
	b2Color = box2d.b2Color,
	b2internal = box2d.b2internal,
	b2Settings = box2d.b2Settings,
	b2Mat22 = box2d.b2Mat22,
	b2Mat33 = box2d.b2Mat33,
	b2Math = box2d.b2Math,
	b2Sweep = box2d.b2Sweep,
	b2Transform = box2d.b2Transform,
	b2Vec2 = box2d.b2Vec2,
	b2Vec3 = box2d.b2Vec3,
	b2AABB = box2d.b2AABB,
	b2Bound = box2d.b2Bound,
	b2BoundValues = box2d.b2BoundValues,
	b2Collision = box2d.b2Collision,
	b2ContactID = box2d.b2ContactID,
	b2ContactPoint = box2d.b2ContactPoint,
	b2Distance = box2d.b2Distance,
	b2DistanceInput = box2d.b2DistanceInput,
	b2DistanceOutput = box2d.b2DistanceOutput,
	b2DistanceProxy = box2d.b2DistanceProxy,
	b2DynamicTree = box2d.b2DynamicTree,
	b2DynamicTreeBroadPhase = box2d.b2DynamicTreeBroadPhase,
	b2DynamicTreeNode = box2d.b2DynamicTreeNode,
	b2DynamicTreePair = box2d.b2DynamicTreePair,
	b2Manifold = box2d.b2Manifold,
	b2ManifoldPoint = box2d.b2ManifoldPoint,
	b2Point = box2d.b2Point,
	b2RayCastInput = box2d.b2RayCastInput,
	b2RayCastOutput = box2d.b2RayCastOutput,
	b2Segment = box2d.b2Segment,
	b2SeparationFunction = box2d.b2SeparationFunction,
	b2Simplex = box2d.b2Simplex,
	b2SimplexCache = box2d.b2SimplexCache,
	b2SimplexVertex = box2d.b2SimplexVertex,
	b2TimeOfImpact = box2d.b2TimeOfImpact,
	b2TOIInput = box2d.b2TOIInput,
	b2WorldManifold = box2d.b2WorldManifold,
	ClipVertex = box2d.ClipVertex,
	Features = box2d.Features,
	IBroadPhase = box2d.IBroadPhase,
	b2Joint = box2d.b2Joint,
	b2JointDef = box2d.b2JointDef,
	b2JointEdge = box2d.b2JointEdge,
	b2LineJoint = box2d.b2LineJoint,
	b2LineJointDef = box2d.b2LineJointDef,
	b2MouseJoint = box2d.b2MouseJoint,
	b2MouseJointDef = box2d.b2MouseJointDef,
	b2PrismaticJoint = box2d.b2PrismaticJoint,
	b2PrismaticJointDef = box2d.b2PrismaticJointDef,
	b2PulleyJoint = box2d.b2PulleyJoint,
	b2PulleyJointDef = box2d.b2PulleyJointDef,
	b2RevoluteJoint = box2d.b2RevoluteJoint,
	b2RevoluteJointDef = box2d.b2RevoluteJointDef,
	b2WeldJoint = box2d.b2WeldJoint,
	b2WeldJointDef = box2d.b2WeldJointDef,
	b2DistanceJoint = box2d.b2DistanceJoint,
	b2DistanceJointDef = box2d.b2DistanceJointDef,
	b2FrictionJoint = box2d.b2FrictionJoint,
	b2FrictionJointDef = box2d.b2FrictionJointDef,
	b2WheelJoint = box2d.b2WheelJoint,
	b2WheelJointDef = box2d.b2WheelJointDef,
	b2MotorJoint = box2d.b2MotorJoint,
	b2MotorJointDef = box2d.b2MotorJointDef,
	b2RopeJoint = box2d.b2RopeJoint,
	b2RopeJointDef = box2d.b2RopeJointDef,
	e_none = box2d.b2DrawFlags.e_none,
	e_shapeBit = box2d.b2DrawFlags.e_shapeBit,
	e_jointBit = box2d.b2DrawFlags.e_jointBit,
	e_aabbBit = box2d.b2DrawFlags.e_aabbBit,
	e_pairBit = box2d.b2DrawFlags.e_pairBit,
	e_centerOfMassBit = box2d.b2DrawFlags.e_centerOfMassBit,
	e_controllerBit = box2d.b2DrawFlags.e_controllerBit,
	e_all = box2d.b2DrawFlags.e_all,
	e_circleShape = box2d.b2ShapeType.e_circleShape,
	e_edgeShape = box2d.b2ShapeType.e_edgeShape,
	e_chainShape = box2d.b2ShapeType.e_chainShape,
	e_polygonShape = box2d.b2ShapeType.e_polygonShape;

Object.prototype.hasOwnProperty = function(property) {
	return typeof(this[property]) !== 'undefined'
};

function loadBodyFromRUBE(bodyJso, world) {

	if ( ! bodyJso.hasOwnProperty('type') ) {
		console.warn("Body does not have a 'type' property");
		return null;
	}

	var bd = new b2BodyDef();
	if ( bodyJso.type == 2 )
		bd.type = b2_dynamicBody;
	else if ( bodyJso.type == 1 )
		bd.type = b2_kinematicBody;
	if ( bodyJso.hasOwnProperty('angle') )
		bd.angle = bodyJso.angle;
	if ( bodyJso.hasOwnProperty('angularVelocity') )
		bd.angularVelocity = bodyJso.angularVelocity;
	if ( bodyJso.hasOwnProperty('active') )
		bd.awake = bodyJso.active;
	if ( bodyJso.hasOwnProperty('fixedRotation') )
		bd.fixedRotation = bodyJso.fixedRotation;
	if ( bodyJso.hasOwnProperty('gravityScale') )
		bd.gravityScale = bodyJso.gravityScale;
	if ( bodyJso.hasOwnProperty('linearVelocity') && bodyJso.linearVelocity instanceof Object )
		bd.linearVelocity.Copy( bodyJso.linearVelocity );
	if ( bodyJso.hasOwnProperty('position') && bodyJso.position instanceof Object )
		bd.position.Copy( bodyJso.position );
	if ( bodyJso.hasOwnProperty('awake') )
		bd.awake = bodyJso.awake;
	else
		bd.awake = false;

	var body = world.CreateBody(bd);
	if ( bodyJso.hasOwnProperty('fixture') ) {
		for (k = 0; k < bodyJso['fixture'].length; k++) {
			var fixtureJso = bodyJso['fixture'][k];
			loadFixtureFromRUBE(body, fixtureJso);
		}
	}

	if ( bodyJso.hasOwnProperty('name') )
		body.name = bodyJso.name;
	if ( bodyJso.hasOwnProperty('customProperties') )
		body.customProperties = bodyJso.customProperties;

	return body;
}

function loadFixtureFromRUBE(body, fixtureJso) {

	var fixture = null;
	var fd = new b2FixtureDef();
	if (fixtureJso.hasOwnProperty('friction'))
		fd.friction = fixtureJso.friction;
	if (fixtureJso.hasOwnProperty('density'))
		fd.density = fixtureJso.density;
	if (fixtureJso.hasOwnProperty('restitution'))
		fd.restitution = fixtureJso.restitution;
	if (fixtureJso.hasOwnProperty('sensor'))
		fd.isSensor = fixtureJso.sensor;
	if ( fixtureJso.hasOwnProperty('filter-categoryBits') )
		fd.filter.categoryBits = fixtureJso['filter-categoryBits'];
	if ( fixtureJso.hasOwnProperty('filter-maskBits') )
		fd.filter.maskBits = fixtureJso['filter-maskBits'];
	if ( fixtureJso.hasOwnProperty('filter-groupIndex') )
		fd.filter.groupIndex = fixtureJso['filter-groupIndex'];
	if (fixtureJso.hasOwnProperty('circle')) {
		fd.shape = new b2CircleShape();
		fd.shape.m_radius = fixtureJso.circle.radius;
		if ( fixtureJso.circle.center )
			fd.shape.m_p.Copy(fixtureJso.circle.center);
		fixture = body.CreateFixture(fd);
		if ( fixtureJso.name )
			fixture.name = fixtureJso.name;
	}
	else if (fixtureJso.hasOwnProperty('polygon')) {
		fd.shape = new b2PolygonShape();
		var verts = [];
		for (v = 0; v < fixtureJso.polygon.vertices.x.length; v++)
		   verts.push( new b2Vec2( fixtureJso.polygon.vertices.x[v], fixtureJso.polygon.vertices.y[v] ) );
		fd.shape.SetAsArray(verts, verts.length);
		fixture = body.CreateFixture(fd);
		if ( fixture && fixtureJso.name )
			fixture.name = fixtureJso.name;
	}
	else if (fixtureJso.hasOwnProperty('chain')) {
		fd.shape = new b2ChainShape();
		var verts = [];
		for (v = 0; v < fixtureJso.chain.vertices.x.length; v++)
		   verts.push( new b2Vec2( fixtureJso.chain.vertices.x[v], fixtureJso.chain.vertices.y[v] ) );
		fd.shape.CreateChain(verts, verts.length);
		fixture = body.CreateFixture(fd);
		if ( fixture && fixtureJso.name )
			fixture.name = fixtureJso.name;
	}
	else {
		console.warn("Could not find shape type for fixture");
	}

	if ( fixture ) {
		if ( fixtureJso.hasOwnProperty('customProperties') )
			fixture.customProperties = fixtureJso.customProperties;
	}
}

function getVectorValue(val) {
	if ( val instanceof Object )
		return val;
	else
		return { x:0, y:0 };
}

function loadJointCommonProperties(jd, jointJso, loadedBodies) {
	jd.bodyA = loadedBodies[jointJso.bodyA];
	jd.bodyB = loadedBodies[jointJso.bodyB];
	jd.localAnchorA.Copy( getVectorValue(jointJso.anchorA) );
	jd.localAnchorB.Copy( getVectorValue(jointJso.anchorB) );
	if ( jointJso.collideConnected )
		jd.collideConnected = jointJso.collideConnected;
}

function loadJointFromRUBE(jointJso, world, loadedBodies)
{
	if ( ! jointJso.hasOwnProperty('type') ) {
		console.warn("Joint does not have a 'type' property");
		return null;
	}
	if ( jointJso.bodyA >= loadedBodies.length ) {
		console.warn("Index for bodyA is invalid: " + jointJso.bodyA );
		return null;
	}
	if ( jointJso.bodyB >= loadedBodies.length ) {
		console.warn("Index for bodyB is invalid: " + jointJso.bodyB );
		return null;
	}

	var joint = null;
	if ( jointJso.type == "revolute" ) {
		var jd = new b2RevoluteJointDef();
		loadJointCommonProperties(jd, jointJso, loadedBodies);
		if ( jointJso.hasOwnProperty('refAngle') )
			jd.referenceAngle = jointJso.refAngle;
		if ( jointJso.hasOwnProperty('lowerLimit') )
			jd.lowerAngle = jointJso.lowerLimit;
		if ( jointJso.hasOwnProperty('upperLimit') )
			jd.upperAngle = jointJso.upperLimit;
		if ( jointJso.hasOwnProperty('maxMotorTorque') )
			jd.maxMotorTorque = jointJso.maxMotorTorque;
		if ( jointJso.hasOwnProperty('motorSpeed') )
			jd.motorSpeed = jointJso.motorSpeed;
		if ( jointJso.hasOwnProperty('enableLimit') )
			jd.enableLimit = jointJso.enableLimit;
		if ( jointJso.hasOwnProperty('enableMotor') )
			jd.enableMotor = jointJso.enableMotor;
		joint = world.CreateJoint(jd);
	}
	else if ( jointJso.type == "distance" ) {
		var jd = new b2DistanceJointDef();
		loadJointCommonProperties(jd, jointJso, loadedBodies);
		if ( jointJso.hasOwnProperty('length') )
			jd.length = jointJso.length;
		if ( jointJso.hasOwnProperty('dampingRatio') )
			jd.dampingRatio = jointJso.dampingRatio;
		if ( jointJso.hasOwnProperty('frequency') )
			jd.frequencyHz = jointJso.frequency;
		joint = world.CreateJoint(jd);
	}
	else if ( jointJso.type == "rope" ) {
		var jd = new b2RopeJointDef();
		loadJointCommonProperties(jd, jointJso, loadedBodies);
		if ( jointJso.hasOwnProperty('maxLength') )
			jd.maxLength = jointJso.maxLength;
		joint = world.CreateJoint(jd);
	}
	else if ( jointJso.type == "prismatic" ) {
		var jd = new b2PrismaticJointDef();
		loadJointCommonProperties(jd, jointJso, loadedBodies);
		if ( jointJso.hasOwnProperty('localAxisA') )
			jd.localAxisA.Copy( getVectorValue(jointJso.localAxisA) );
		if ( jointJso.hasOwnProperty('refAngle') )
			jd.referenceAngle = jointJso.refAngle;
		if ( jointJso.hasOwnProperty('enableLimit') )
			jd.enableLimit = jointJso.enableLimit;
		if ( jointJso.hasOwnProperty('lowerLimit') )
			jd.lowerTranslation = jointJso.lowerLimit;
		if ( jointJso.hasOwnProperty('upperLimit') )
			jd.upperTranslation = jointJso.upperLimit;
		if ( jointJso.hasOwnProperty('enableMotor') )
			jd.enableMotor = jointJso.enableMotor;
		if ( jointJso.hasOwnProperty('maxMotorForce') )
			jd.maxMotorForce = jointJso.maxMotorForce;
		if ( jointJso.hasOwnProperty('motorSpeed') )
			jd.motorSpeed = jointJso.motorSpeed;
		joint = world.CreateJoint(jd);
	}
	else if ( jointJso.type == "wheel" ) {
		var jd = new b2WheelJointDef();
		loadJointCommonProperties(jd, jointJso, loadedBodies);
		jd.length = 0.0;
		if ( jointJso.hasOwnProperty('springDampingRatio') )
			jd.dampingRatio = jointJso.springDampingRatio;
		if ( jointJso.hasOwnProperty('springFrequency') )
			jd.frequencyHz = jointJso.springFrequency;
		if ( jointJso.hasOwnProperty('localAxisA') )
			jd.localAxisA.Copy( getVectorValue(jointJso.localAxisA) );
		if ( jointJso.hasOwnProperty('maxMotorTorque') )
			jd.maxMotorTorque = jointJso.maxMotorTorque;
		if ( jointJso.hasOwnProperty('motorSpeed') )
			jd.motorSpeed = jointJso.motorSpeed;
		if ( jointJso.hasOwnProperty('enableMotor') )
			jd.enableMotor = jointJso.enableMotor;

		joint = world.CreateJoint(jd);
	}
	else if ( jointJso.type == "friction" ) {
		var jd = new b2FrictionJointDef();
		loadJointCommonProperties(jd, jointJso, loadedBodies);
		if ( jointJso.hasOwnProperty('maxForce') )
			jd.maxForce = jointJso.maxForce;
		if ( jointJso.hasOwnProperty('maxTorque') )
			jd.maxTorque = jointJso.maxTorque;
		joint = world.CreateJoint(jd);
	}
	else if ( jointJso.type == "weld" ) {
		var jd = new b2WeldJointDef();
		loadJointCommonProperties(jd, jointJso, loadedBodies);
		if ( jointJso.hasOwnProperty('referenceAngle') )
			jd.referenceAngle = jointJso.referenceAngle;
		if ( jointJso.hasOwnProperty('dampingRatio') )
			jd.dampingRatio = jointJso.dampingRatio;
		if ( jointJso.hasOwnProperty('frequency') )
			jd.frequencyHz = jointJso.frequency;
		joint = world.CreateJoint(jd);
	}
	else if ( jointJso.type == "motor" ) {
		var jd = new b2MotorJointDef();
		jd.bodyA = loadedBodies[jointJso.bodyA];
		jd.bodyB = loadedBodies[jointJso.bodyB];
		jd.linearOffset.Copy( getVectorValue(jointJso.anchorA) );
		if ( jointJso.collideConnected )
			jd.collideConnected = jointJso.collideConnected;
		if ( jointJso.hasOwnProperty('angularOffset') )
			jd.referenceAngle = jointJso.angularOffset;
		if ( jointJso.hasOwnProperty('maxForce') )
			jd.maxForce = jointJso.maxForce;
		if ( jointJso.hasOwnProperty('maxTorque') )
			jd.maxTorque = jointJso.maxTorque;
		if ( jointJso.hasOwnProperty('correctionFactor') )
			jd.correctionFactor = jointJso.correctionFactor;
		joint = world.CreateJoint(jd);
	}
	else {
		console.warn("Unsupported joint type: " + jointJso.type);
	}
	if ( joint ) {
		if ( jointJso.name )
			joint.name = jointJso.name;
		if ( jointJso.hasOwnProperty('customProperties') )
			joint.customProperties = jointJso.customProperties;
	}
	return joint;
}

function makeClone(obj) {
  var newObj = (obj instanceof Array) ? [] : {};
  for (var i in obj) {
	if (obj[i] && typeof obj[i] == "object")
	  newObj[i] = makeClone(obj[i]);
	else
		newObj[i] = obj[i];
  }
  return newObj;
};

function loadImageFromRUBE(imageJso, world, loadedBodies)
{
	var image = makeClone(imageJso);

	if ( image.hasOwnProperty('body') && image.body >= 0 )
		image.body = loadedBodies[image.body];//change index to the actual body
	else
		image.body = null;

	if ( ! image.hasOwnProperty('aspectScale') )
		image.aspectScale = 1;
	if ( ! image.hasOwnProperty('angle') )
		image.angle = 0;
	if ( ! image.hasOwnProperty('colorTint') )
		image.colorTint = [255,255,255,255];

	image.center = new b2Vec2();
	image.center.Copy( getVectorValue(imageJso.center) );

	return image;
}



//mainly just a convenience for the testbed - uses global 'world' variable
function loadSceneFromRUBE(worldJso) {
	return loadSceneIntoWorld(worldJso, world);
}

//load the scene into an already existing world variable
function loadSceneIntoWorld(worldJso, world, loadedBodies, loadedImages, loadedJoints) {

	if (typeof loadedBodies === 'undefined') { loadedBodies = []; }
	if (typeof loadedImages === 'undefined') { loadedImages = []; }
	if (typeof loadedJoints === 'undefined') { loadedJoints = []; }

	var success = true;

	if ( worldJso.hasOwnProperty('gravity') && worldJso.gravity instanceof Object )
		world.SetGravity( worldJso.gravity );

	if ( worldJso.hasOwnProperty('body') ) {
		for (var i = 0; i < worldJso.body.length; i++) {
			var bodyJso = worldJso.body[i];
			var body = loadBodyFromRUBE(bodyJso, world);
			if ( body )
				loadedBodies.push( body );
			else
				success = false;
		}
	}

	if ( worldJso.hasOwnProperty('joint') ) {
		for (var i = 0; i < worldJso.joint.length; i++) {
			var jointJso = worldJso.joint[i];
			var joint = loadJointFromRUBE(jointJso, world, loadedBodies);
			if ( joint )
				loadedJoints.push( joint );
			else
				success = false;
		}
	}

	if ( typeof world.images === 'undefined' ) {
		world.images = [];
	}

	if ( worldJso.hasOwnProperty('image') ) {
		for (var i = 0; i < worldJso.image.length; i++) {
			var imageJso = worldJso.image[i];
			var image = loadImageFromRUBE(imageJso, world, loadedBodies);
			if ( image ) {
				loadedImages.push( image );
				world.images.push( image );
			}
			else
				success = false;
		}
	}

	return success;
}

//create a world variable and return it if loading succeeds
function loadWorldFromRUBE(worldJso) {
	var gravity = new b2Vec2(0,0);
	if ( worldJso.hasOwnProperty('gravity') && worldJso.gravity instanceof Object )
		gravity.Copy( worldJso.gravity );
	var world = new b2World( gravity );
	if ( ! loadSceneIntoWorld(worldJso, world) )
		return false;
	return world;
}

function getNamedBodies(world, name) {
	var bodies = [];
	for (b = world.m_bodyList; b; b = b.m_next) {
		if ( b.name == name )
			bodies.push(b);
	}
	return bodies;
}

function getNamedFixtures(world, name) {
	var fixtures = [];
	for (b = world.m_bodyList; b; b = b.m_next) {
		for (f = b.m_fixtureList; f; f = f.m_next) {
			if ( f.name == name )
				fixtures.push(f);
		}
	}
	return fixtures;
}

function getNamedJoints(world, name) {
	var joints = [];
	for (j = world.m_jointList; j; j = j.m_next) {
		if ( j.name == name )
			joints.push(j);
	}
	return joints;
}

function getNamedImages(world, name) {
	var images = [];
	for (i = 0; i < world.images.length; i++) {
		if ( world.images[i].name == name )
			images.push(world.images[i].name);
	}
	return images;
}

function objectMatchesForCustomProperty(obj, propertyType, propertyName, valueToMatch) {
	if ( ! obj.hasOwnProperty('customProperties') )
		return false;
	for (var i = 0; i < obj.customProperties.length; i++) {
		if ( ! obj.customProperties[i].hasOwnProperty("name") )
			continue;
		if ( ! obj.customProperties[i].hasOwnProperty(propertyType) )
			continue;
		if ( obj.customProperties[i].name == propertyName &&
			 obj.customProperties[i][propertyType] == valueToMatch)
			return true;
	}
	return false;
}

function getBodiesByCustomProperty(world, propertyType, propertyName, valueToMatch) {
	var bodies = [];
	for (var body = world.m_bodyList; body; body = body.m_next) {
		if ( objectMatchesForCustomProperty(body, propertyType, propertyName, valueToMatch) )
			bodies.push(body);
	}
	return bodies;
}

function getFixturesByCustomProperty(world, propertyType, propertyName, valueToMatch) {
	var fixtures = [];
	for (var body = world.m_bodyList; body; body = body.m_next) {
	for (var fixture = body.m_fixtureList; fixture; fixture = fixture.m_next) {
			if ( objectMatchesForCustomProperty(fixture, propertyType, propertyName, valueToMatch) )
				fixtures.push(fixture);
		}
	}
	return fixtures;
}

function getJointsByCustomProperty(world, propertyType, propertyName, valueToMatch) {
	var joints = [];
	for (var joint = world.m_jointList; joint; joint = joint.m_next) {
		if ( objectMatchesForCustomProperty(joint, propertyType, propertyName, valueToMatch) )
			joints.push(joint);
	}
	return joints;
}

function getImagesByCustomProperty(world, propertyType, propertyName, valueToMatch) {
	var images = [];
	for (var i = 0; i < world.images.length; i++) {
		if ( objectMatchesForCustomProperty(world.images[i], propertyType, propertyName, valueToMatch) )
			images.push(world.images[i]);
	}
	return images;
}

function hasCustomProperty(item, propertyType, propertyName) {
	if ( !item.hasOwnProperty('customProperties') )
		return false;
	for (var i = 0; i < item.customProperties.length; i++) {
		if ( ! item.customProperties[i].hasOwnProperty("name") )
			continue;
		if ( ! item.customProperties[i].hasOwnProperty(propertyType) )
			continue;
		return true;
	}
	return false;
}

function getCustomProperty(item, propertyType, propertyName, defaultValue) {
	if ( !item.hasOwnProperty('customProperties') )
		return defaultValue;
	for (var i = 0; i < item.customProperties.length; i++) {
		if ( ! item.customProperties[i].hasOwnProperty("name") )
			continue;
		if ( ! item.customProperties[i].hasOwnProperty(propertyType) )
			continue;
		if ( item.customProperties[i].name == propertyName )
			return item.customProperties[i][propertyType];
	}
	return defaultValue;
}











/*
* Author: Chris Campbell - www.iforce2d.net
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
*/

/**
*
*
* @class RubeScene
* @classdesc RubeScene
* @constructor
* @param {Phaser.Physics.Box2D} world - A reference to the Box2D world, used for pixel/meter conversions.
* @param {any} object - The object to bind to, which holds the actual value.
* @param {function} gettor - The function of the bound object which gets the value from it.
* @param {function} settor - The function of the bound object which sets the value in it.
*/
Phaser.Physics.Box2D.RubeScene = function (sceneKey) {

	this.sceneKey = sceneKey;
	this.offset = new box2d.b2Vec2(0,0);
	this.parsedScene = null;
	this.afterLoadFunction = null;
	this.bodies = [];
	this.images = [];
	this.joints = [];
	this.fixtures = [];

};

Phaser.Physics.Box2D.RubeScene.prototype.constructor = Phaser.Physics.Box2D.RubeScene;

/**
 * Resets transform state to original
 *
 * @export
 * @return {void}
 */
Phaser.Physics.Box2D.RubeScene.prototype.load = function (offsetX, offsetY, _afterLoadFunction)
{
	if (typeof offsetX === 'undefined') { offsetX = 0; }
	if (typeof offsetY === 'undefined') { offsetY = 0; }

	this.offset.x = offsetX;
	this.offset.y = offsetY;
	this.afterLoadFunction = _afterLoadFunction;
	this.parsedScene = JSON.parse(game.cache.getText(this.sceneKey));

	if ( ! loadSceneIntoWorld(this.parsedScene, game.physics.box2d.world, this.bodies, this.images, this.joints) ) {
		console.warn("Failed to load RUBE scene '" + this.sceneKey + "'");
		return null;
	}

	//console.log("Loaded "+this.bodies.length+" bodies");
	//console.log("Loaded "+this.images.length+" images");
	//console.log("Loaded "+this.joints.length+" joints");
	//console.log("Loaded "+this.fixtures.length+" fixtures");

	for (var i = 0; i < this.bodies.length; i++) {
		var b2b = this.bodies[i];
		var p = b2b.GetPosition();
		b2b.SetPositionXY( p.x + offsetX, p.y + offsetY );

		// Create a Phaser.Physics.Box2D.Body for each box2d.b2Body
		var b = game.physics.box2d.createBody(0,0,0); // dummy params
		b.data = b2b;
		b.name = b2b.name;
		b2b.parent = b;
		b2b.world = b.world.world;

		for (var f = b2b.m_fixtureList; f; f = f.GetNext()) {
			this.fixtures.push(f);
			f.id = game.physics.box2d.getNextFixtureId();
		}
	}

	var imageLoader = new Phaser.Loader(game);
	for (var i = 0; i < this.images.length; i++) {
		imageLoader.image(this.images[i].file, this.images[i].file);
	}
	imageLoader.onLoadComplete.addOnce(this.onImagesLoaded, this);
	imageLoader.start();

	return this.parsedScene;
};

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
	return "0x" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * Resets transform state to original
 *
 * @export
 * @return {void}
 */
Phaser.Physics.Box2D.RubeScene.prototype.onImagesLoaded = function ()
{

	for (var i = 0; i < this.images.length; i++) {
		var img = this.images[i];
		img.sprite = game.add.sprite(10, 10, this.images[i].file);
		img.sprite.anchor.set(0.5,0.5);
		//img.sprite.tint = rgbToHex(img.colorTint[0], img.colorTint[1], img.colorTint[2]);//BV
		//img.sprite.alpha = img.opacity * (img.colorTint[3] / 255);//BV

		if ( img.body ) {
			img.sprite.body = img.body.parent;
		}
		else {
			img.offset = this.offset;
		}

		// Apparently, setting the scale of a sprite clobbers the dimension
		// values so we need to keep a copy of what the height originally was.
		img.pixelHeight = img.sprite.height;
	}
	updateRubeSprites();

	if ( typeof this.afterLoadFunction != 'undefined' ) {
		this.afterLoadFunction();
	}
}

Phaser.Physics.Box2D.RubeScene.prototype.clear = function(body) {

	for (var i = 0; i < this.images.length; i++) {
		var img = this.images[i];
		if ( img.sprite ) {
			img.sprite.kill();
		}
	}
	for (var i = 0; i < this.bodies.length; i++) {
		var b = this.bodies[i];
		removeBodyAndSprites( b.parent );
	}

	this.bodies = [];
	this.images = [];

}

Phaser.Physics.Box2D.RubeScene.prototype.getBody = function(name) {
	for (var i = 0; i < this.bodies.length; i++) {
		var b = this.bodies[i];
		if ( b.parent === void 0 ) {
			continue;
		}
		if ( b.parent.name == name )
			return b.parent;
	}
	return null;
}

Phaser.Physics.Box2D.RubeScene.prototype.getBodies = function(name) {
	var bodies = [];
	for (var i = 0; i < this.bodies.length; i++) {
		var b = this.bodies[i];
		if ( b.parent === void 0 ) {
			continue;
		}
		if ( b.parent.name == name )
			bodies.push(b.parent);
	}
	return bodies;
}

Phaser.Physics.Box2D.RubeScene.prototype.getSprite = function(name) {
	for (var i = 0; i < this.images.length; i++) {
		var img = this.images[i];
		if ( img.name == name )
			return img.sprite;
	}
	return null;
}

Phaser.Physics.Box2D.RubeScene.prototype.getSprites = function(name) {
	var sprites = [];
	for (var i = 0; i < this.images.length; i++) {
		var img = this.images[i];
		if ( img.name == name )
			sprites.push( img.sprite );
	}
	return sprites;
}

Phaser.Physics.Box2D.RubeScene.prototype.getJoint = function(name) {
	for (var i = 0; i < this.joints.length; i++) {
		var j = this.joints[i];
		if ( j.name == name )
			return j;
	}
	return null;
}

Phaser.Physics.Box2D.RubeScene.prototype.getJoints = function(name) {
	var joints = [];
	for (var i = 0; i < this.joints.length; i++) {
		var j = this.joints[i];
		if ( j.name == name )
			joints.push(j);
	}
	return joints;
}

Phaser.Physics.Box2D.RubeScene.prototype.getFixture = function(name) {
	for (var i = 0; i < this.fixtures.length; i++) {
		var f = this.fixtures[i];
		if ( f.name == name )
			return f;
	}
	return null;
}

Phaser.Physics.Box2D.RubeScene.prototype.getFixtures = function(name) {
	var fixtures = [];
	for (var i = 0; i < this.fixtures.length; i++) {
		var f = this.fixtures[i];
		if ( f.name == name )
			fixtures.push(f);
	}
	return fixtures;
}

Phaser.Physics.Box2D.RubeScene.prototype.getBodiesByCustomProperty = function(propertyType, propertyName, valueToMatch) {
	var bodies = [];
	for (var i = 0; i < this.bodies.length; i++) {
		var body = this.bodies[i];
		if ( objectMatchesForCustomProperty(body, propertyType, propertyName, valueToMatch) )
			bodies.push(body);
	}
	return bodies;
}

Phaser.Physics.Box2D.RubeScene.prototype.getFixturesByCustomProperty = function(propertyType, propertyName, valueToMatch) {
	var fixtures = [];
	for (var i = 0; i < this.fixtures.length; i++) {
		var fixture = this.fixtures[i];
	for (var fixture = body.m_fixtureList; fixture; fixture = fixture.m_next) {
			if ( objectMatchesForCustomProperty(fixture, propertyType, propertyName, valueToMatch) )
				fixtures.push(fixture);
		}
	}
	return fixtures;
}

Phaser.Physics.Box2D.RubeScene.prototype.getJointsByCustomProperty = function(propertyType, propertyName, valueToMatch) {
	var joints = [];
	for (var i = 0; i < this.joints.length; i++) {
		var joint = this.joints[i];
		if ( objectMatchesForCustomProperty(joint, propertyType, propertyName, valueToMatch) )
			joints.push(joint);
	}
	return joints;
}

Phaser.Physics.Box2D.RubeScene.prototype.getSpritesByCustomProperty = function(propertyType, propertyName, valueToMatch) {
	var images = [];
	for (var i = 0; i < this.images.length; i++) {
		var image = this.images[i];
		if ( objectMatchesForCustomProperty(image, propertyType, propertyName, valueToMatch) )
			images.push(image.sprite);
	}
	return images;
}

/*
* Author: Chris Campbell - www.iforce2d.net
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
*/

function updateRubeSprites() {

	var world = game.physics.box2d.world;
	if ( world.images ) {
		for (var i = 0; i < world.images.length; i++) {
			var image = world.images[i];
			var sprite = image.sprite;
			if ( sprite === void 0 ) {
				continue; // this function may be called during loading, when sprites are not yet ready
			}
			sprite.rotation = -image.angle;
			var imageScale = game.physics.box2d.ptmRatio / image.pixelHeight * image.scale;
			imageScale = 1;//BV
			sprite.scale.set(image.aspectScale * imageScale, imageScale);
			if ( image.flip ) {
				sprite.scale.x *= -1;
			}

			if ( image.body ) {
				var imageWorldCenter = new b2Vec2();
				image.body.GetWorldPoint( image.center, imageWorldCenter );
				sprite.position.x = imageWorldCenter.x;
				sprite.position.y = -imageWorldCenter.y;
				sprite.rotation += -image.body.GetAngle();
			}
			else {
				// no body
				sprite.position.x = image.center.x + image.offset.x;
				sprite.position.y = -image.center.y + image.offset.y;
			}

			sprite.position.x *= game.physics.box2d.ptmRatio;
			sprite.position.y *= game.physics.box2d.ptmRatio;
		}
	}
}

function removeBodyAndSprites(body) {
	var world = game.physics.box2d.world;

	if ( world.images ) {
		for (var i = 0; i < world.images.length; i++) {
			var image = world.images[i];
			if ( image.sprite && image.body && image.body.parent && image.body.parent == body ) {
				image.sprite.destroy();
			}
		}
	}

	game.physics.box2d.removeBodyNextStep(body);
}

// override to add game.camera offset
Phaser.Physics.Box2D.renderBody = function(context, body, color, filled) {

	color = color || 'rgb(255,255,255)';

	if (typeof filled === 'undefined')
	{
		filled = true;
	}

	var world = body.game.physics.box2d;
	var b = body.data;
	var xf = b.GetTransform();

	xf.p.x += -game.camera.x / world.ptmRatio;
	xf.p.y -= -game.camera.y / world.ptmRatio;

	world.debugDraw.start(context);

	world.debugDraw.PushTransform(xf);

	var rgbcolor = Phaser.Color.webToColor(color);

	var b2color = world.debugDraw.color;
	b2color.r = rgbcolor.r / 255;
	b2color.g = rgbcolor.g / 255;
	b2color.b = rgbcolor.b / 255;

	for (var f = b.GetFixtureList(); f; f = f.GetNext())
	{
		world.world.DrawShape(f, b2color);
	}

	world.debugDraw.PopTransform();

	world.debugDraw.stop();

};

// override to reverse x and angle
Phaser.Physics.Box2D.Body.prototype.postUpdate = function () {

	if (this.sprite) {
		this.sprite.x = this.world.mpx(this.data.GetPosition().x);
		this.sprite.y = this.world.mpx(-this.data.GetPosition().y);
		this.sprite.rotation = -this.data.GetAngle();
	}

}

// override to change x scale to 1 instead of -1
Phaser.Physics.Box2D.DefaultDebugDraw.prototype.start = function (context)
{
	this.context = context;
	this.context.save();
	this.context.scale( 1, -1);
	this.context.scale(this.pixelsPerMeter, this.pixelsPerMeter);
};

// If the PTM ratio is changed after creating the world, the debug draw scale needs to be updated
Phaser.Physics.Box2D.prototype.setPTMRatio = function(newRatio) {
	this.ptmRatio = newRatio;
	game.physics.box2d.debugDraw = new Phaser.Physics.Box2D.DefaultDebugDraw(this.ptmRatio);
	game.physics.box2d.world.SetDebugDraw( game.physics.box2d.debugDraw );
}



// override to add check for pA or pB undefined
Phaser.Physics.Box2D.DefaultContactListener.prototype.handleContactBeginOrEnd = function (contact, begin)
{
	var fA = contact.GetFixtureA();
	var fB = contact.GetFixtureB();
	var bA = fA.GetBody();
	var bB = fB.GetBody();
	var catA = fA.GetFilterData().categoryBits;
	var catB = fB.GetFilterData().categoryBits;
	var pA = bA.parent;
	var pB = bB.parent;

	if ( pA === void 0 || pB === void 0 ) {
		return;
	}

	var idA = pA.id;
	var idB = pB.id;

	// Check body callbacks
	if (pA._bodyContactCallbacks[idB])
	{
		pA._bodyContactCallbacks[idB].call(pA._bodyContactCallbackContext[idB], pA, pB, fA, fB, begin, contact);
	}

	if (pB._bodyContactCallbacks[idA])
	{
		pB._bodyContactCallbacks[idA].call(pB._bodyContactCallbackContext[idA], pB, pA, fB, fA, begin, contact);
	}

	// Check fixture callbacks
	if (pA._fixtureContactCallbacks[fB.id])
	{
		pA._fixtureContactCallbacks[fB.id].call(pA._fixtureContactCallbackContext[fB.id], pA, pB, fA, fB, begin, contact);
	}

	if (pB._fixtureContactCallbacks[fA.id])
	{
		pB._fixtureContactCallbacks[fA.id].call(pB._fixtureContactCallbackContext[fA.id], pB, pA, fB, fA, begin, contact);
	}

	if (pA._fixtureContactCallbacks[fA.id])
	{
		pA._fixtureContactCallbacks[fA.id].call(pA._fixtureContactCallbackContext[fA.id], pA, pB, fA, fB, begin, contact);
	}

	if (pB._fixtureContactCallbacks[fB.id])
	{
		pB._fixtureContactCallbacks[fB.id].call(pB._fixtureContactCallbackContext[fB.id], pB, pA, fB, fA, begin, contact);
	}

	// Check group callbacks
	if (pA._categoryContactCallbacks[catB])
	{
		pA._categoryContactCallbacks[catB].call(pA._categoryContactCallbackContext[catB], pA, pB, fA, fB, begin, contact);
	}

	if (pB._categoryContactCallbacks[catA])
	{
		pB._categoryContactCallbacks[catA].call(pB._categoryContactCallbackContext[catA], pB, pA, fB, fA, begin, contact);
	}

	if (pA._categoryContactCallbacks[catA])
	{
		pA._categoryContactCallbacks[catA].call(pA._categoryContactCallbackContext[catA], pA, pB, fA, fB, begin, contact);
	}

	if (pB._categoryContactCallbacks[catB])
	{
		pB._categoryContactCallbacks[catB].call(pB._categoryContactCallbackContext[catB], pB, pA, fB, fA, begin, contact);
	}

};

// override to add check for pA or pB undefined
Phaser.Physics.Box2D.DefaultContactListener.prototype.PreSolve = function (contact, oldManifold)
{
	var fA = contact.GetFixtureA();
	var fB = contact.GetFixtureB();
	var bA = fA.GetBody();
	var bB = fB.GetBody();
	var catA = fA.GetFilterData().categoryBits;
	var catB = fB.GetFilterData().categoryBits;
	var pA = bA.parent;
	var pB = bB.parent;

	if ( pA === void 0 || pB === void 0 ) {
		return;
	}

	var idA = pA.id;
	var idB = pB.id;

	// Check body callbacks
	if (pA._bodyPresolveCallbacks[idB])
	{
		pA._bodyPresolveCallbacks[idB].call(pA._bodyPresolveCallbackContext[idB], pA, pB, fA, fB, contact, oldManifold);
	}

	if (pB._bodyPresolveCallbacks[idA])
	{
		pB._bodyPresolveCallbacks[idA].call(pB._bodyPresolveCallbackContext[idA], pB, pA, fB, fA, contact, oldManifold);
	}

	// Check fixture callbacks
	if (pA._fixturePresolveCallbacks[fB.id])
	{
		pA._fixturePresolveCallbacks[fB.id].call(pA._fixturePresolveCallbackContext[fB.id], pA, pB, fA, fB, contact, oldManifold);
	}

	if (pB._fixturePresolveCallbacks[fA.id])
	{
		pB._fixturePresolveCallbacks[fA.id].call(pB._fixturePresolveCallbackContext[fA.id], pB, pA, fB, fA, contact, oldManifold);
	}

	// Check group callbacks
	if (pA._categoryPresolveCallbacks[catB])
	{
		pA._categoryPresolveCallbacks[catB].call(pA._categoryPresolveCallbackContext[catB], pA, pB, fA, fB, contact, oldManifold);
	}

	if (pB._categoryPresolveCallbacks[catA])
	{
		pB._categoryPresolveCallbacks[catA].call(pB._categoryPresolveCallbackContext[catA], pB, pA, fB, fA, contact, oldManifold);
	}

};

// override to add check for pA or pB undefined
Phaser.Physics.Box2D.DefaultContactListener.prototype.PostSolve = function (contact, impulse)
{
	var fA = contact.GetFixtureA();
	var fB = contact.GetFixtureB();
	var bA = fA.GetBody();
	var bB = fB.GetBody();
	var catA = fA.GetFilterData().categoryBits;
	var catB = fB.GetFilterData().categoryBits;
	var pA = bA.parent;
	var pB = bB.parent;

	if ( pA === void 0 || pB === void 0 ) {
		return;
	}

	var idA = pA.id;
	var idB = pB.id;

	// Check body callbacks
	if (pA._bodyPostsolveCallbacks[idB])
	{
		pA._bodyPostsolveCallbacks[idB].call(pA._bodyPostsolveCallbackContext[idB], pA, pB, fA, fB, contact, impulse);
	}

	if (pB._bodyPostsolveCallbacks[idA])
	{
		pB._bodyPostsolveCallbacks[idA].call(pB._bodyPostsolveCallbackContext[idA], pB, pA, fB, fA, contact, impulse);
	}

	// Check fixture callbacks
	if (pA._fixturePostsolveCallbacks[fB.id])
	{
		pA._fixturePostsolveCallbacks[fB.id].call(pA._fixturePostsolveCallbackContext[fB.id], pA, pB, fA, fB, contact, impulse);
	}

	if (pB._fixturePostsolveCallbacks[fA.id])
	{
		pB._fixturePostsolveCallbacks[fA.id].call(pB._fixturePostsolveCallbackContext[fA.id], pB, pA, fB, fA, contact, impulse);
	}

	// Check group callbacks
	if (pA._categoryPostsolveCallbacks[catB])
	{
		pA._categoryPostsolveCallbacks[catB].call(pA._categoryPostsolveCallbackContext[catB], pA, pB, fA, fB, contact, impulse);
	}

	if (pB._categoryPostsolveCallbacks[catA])
	{
		pB._categoryPostsolveCallbacks[catA].call(pB._categoryPostsolveCallbackContext[catA], pB, pA, fB, fA, contact, impulse);
	}

};
