
/**
 * @name Tools.js
 * @author lilei
 * @date 2019.03.26
 * @desc 全局公用函数库
 */
import config from '../config.js'
import Msg from "./Msg";

export default class Tools{

	constructor(){
		
	}

	// 实例工厂函数
	static getInstance(){
		return new Tools();
	}

	/**
	 * @name emit
	 * @params name->消息名称；msg->消息内容
	 * @return 
	 * @desc 发送消息，可以组件间发送
	 */
	emit(name,msg){
		Msg.$emit(name,msg);
	}

	/**
	 * @name on
	 * @params name->消息名称；callback->消息回调
	 * @return 
	 * @desc 接收消息
	 */
	on(name,callback){
		Msg.$on(name,callback);
	}
}