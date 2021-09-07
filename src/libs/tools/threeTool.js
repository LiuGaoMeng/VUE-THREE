/*
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 16:13:37
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-07 10:40:05
 */
//三维坐标转为屏幕坐标
import * as THREE from "three";
function worldToScreenPosition(x = 0, y = 0, z =1, camera) {
  let worldVector = new THREE.Vector3(x, y, z);
  let vector = worldVector.project(camera);
  let halfWidth = window.innerWidth / 2;
  let halfHeight = window.innerHeight / 2;
  return {
    x: Math.round(vector.x * halfWidth + halfWidth),
    y: Math.round(-vector.y * halfHeight + halfHeight),
  };
}

function xyzToScreen(point,camera){
    let vector = point.project(camera);
    let halfWidth = window.innerWidth / 2;
    let halfHeight = window.innerHeight / 2;

    return {
      x: Math.floor(vector.x * halfWidth + halfWidth),
      y: Math.floor(-vector.z * halfHeight + halfHeight),
    };


}

// 计算位置
function calcPosition(lng, lat, alt=3600) {
    let phi = (90 - lat) * (Math.PI / 180)
    let theta = (lng + 180) * (Math.PI / 180)
    let radius = alt
    let x = -(radius * Math.sin(phi) * Math.cos(theta))
    let z = radius * Math.sin(phi) * Math.sin(theta)
    let y = radius * Math.cos(phi);
  return { x: x, y: y, z: z };
}

/**
 * 经纬度转xyz
 * @param longitude 经度
 * @param latitude 纬度
 * @param radius 半径
 */
 function lglt2xyz(longitude,latitude,radius=3600){
    let lg = torad(longitude)
    let lt = torad(latitude);
    let y = radius * Math.sin(lt);
    let temp = radius * Math.cos(lt);
    let x = temp * Math.sin(lg);
    let z = temp * Math.cos(lg);
    return {x:x , y:y ,z:z}
}


// 经纬度转换为球坐标
function torad(deg) {
  return (deg / 180) * Math.acos(-1);
}
function get_coordinate( lat, lng,R=3600) {
  lat = torad(lat);
  lng = torad(lng);
  let x = R * Math.cos(lat) * Math.cos(lng);
  let y = R * Math.cos(lat) * Math.sin(lng);
  let z = R * Math.sin(lat);
  return { x: x, y: y, z: z };
}

function threelglt2xyz(lng, lat, radius=1){
    const theta = (90 + lng) * (Math.PI / 180)
  
    const phi = (90 - lat) * (Math.PI / 180)
  
    return (new THREE.Vector3()).setFromSpherical(new THREE.Spherical(radius, phi, theta))
  
}

function createPosition(lng,lat) {
	let spherical = new THREE.Spherical
	spherical.radius = 3600;
	const theta = (lng + 90) * (Math.PI / 180)
	const phi = (90 - lat) * (Math.PI / 180)
	spherical.phi = phi; // phi是方位面（水平面）内的角度，范围0~360度
	spherical.theta = theta; // theta是俯仰面（竖直面）内的角度，范围0~180度
	let position = new THREE.Vector3()
	position.setFromSpherical(spherical)
	return position
}

export default {
  worldToScreenPosition: worldToScreenPosition,
  calcPosition: calcPosition,
  get_coordinate:get_coordinate,
  lglt2xyz:lglt2xyz,
  threelglt2xyz:threelglt2xyz,
  xyzToScreen:xyzToScreen,
  createPosition:createPosition
};
