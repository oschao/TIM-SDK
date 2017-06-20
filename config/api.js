module.exports = {
	accountManager: {
		AccountImport: {
			path: 'v4/im_open_login_svc/account_import',
			method: '',
		}, multiAccountImport: {
			path: 'v4/im_open_login_svc/multiaccount_import',
			method: '',
		}, registerAccountV1: {
			path: 'v4/registration_service/register_account_v1',
			method: '',
		}, invalidAccountLogin: {
			path: 'v4/im_open_login_svc/kick',
			method: '',
		}
	}, singleChatMsg: {
		sendMsg: {
			path: 'v4/openim/sendmsg',
			method: '',
		}, batchSendMsg: {
			path: 'v4/openim/batchsendmsg',
			method: '',
		}, importMsg: {
			path: 'v4/openim/importmsg',
			method: '',
		}
	}, msgPush: {
		msgPush: {
			path: 'v4/openim/im_push',
			method: '',
		}, getPushReport: {
			path: 'v4/openim/im_get_push_report',
			method: '',
		}, setAppAttrName: {
			path: 'v4/openim/im_set_attr_name,
			method: '',
		}, getAppAttrName: {
			path: 'v4/openim/im_get_attr_name',
			method: '',
		}, setUserAttr: {
			path: 'v4/openim/im_set_attr',
			method: '',
		}, deleteUserAttr: {
			path: 'v4/openim/im_remove_attr',
			method: '',
		}, getUserAttr: {
			path: 'v4/openim/im_get_attr',
			method: '',
		}, addUserTag: {
			path: 'v4/openim/im_add_tag',
			method: '',
		}, deleteUserTag: {
			path: 'v4/openim/im_remove_tag',
			method: '',
		}, deleteUserAllTags: {
			path: 'v4/openim/im_remove_all_tags',
			method: '',
		}
	}
}
