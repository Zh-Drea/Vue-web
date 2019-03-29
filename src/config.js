
/**
 * @name config.js
 * @author lilei
 * @date 2019.03.26
 * @desc 全局配置，包括请求地址等
 */
export default {
	// 默认路由
	defaultRoute:"Dialog",

	// 普通接口请求基地址（开发）
	baseURL:"http://192.168.101.218:51002/coreApi/",
	//授权接口地址（开发）
	authURL:"http://192.168.101.218:51002/oauth/token?client_id=app&client_secret=111111&grant_type=client_credentials",
	// 文件上传接口（开发）
	uploadURL:"http://192.168.101.218:51002/resourceServerApi/upload",

}