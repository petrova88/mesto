export default class UserInfo {
    constructor(configInfo) {
        this._profileName = document.querySelector(configInfo.profileNameSelector);
        this._profileJob = document.querySelector(configInfo.profileJobSelector);
    }

    getUserInfo() {
        return {title: this._profileName.textcontent, job: this._profileJob.textcontent};
    }

    setUserInfo(configNewInfo) {
        this._profileName.textcontent = configNewInfo.title;
        this._profileJob.textcontent = configNewInfo.job;
    }
}