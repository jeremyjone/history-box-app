export class EventModel {
  constructor() {
    this.uid = -1;
    this._year = 0;
    this.isExactYear = true;
    this.isCentury = false;
    this.date = "";
    this.title = "";
    this.subTitle = "";
    this.content = "";
    this.comment = "";
    this.description = "";
    this.icon = "";
    this.type = "";
    this.dynastyId = -1;
    this.updateTime = 0;
  }

  clear() {
    this.uid = -1;
    this.year = 0;
    this.isExactYear = true;
    this.isCentury = false;
    this.date = "";
    this.title = "";
    this.subTitle = "";
    this.content = "";
    this.comment = "";
    this.description = "";
    this.icon = "";
    this.type = "";
    this.dynastyId = -1;
    this.updateTime = 0;
  }

  setItem(item) {
    this.uid = item.uid;
    this.year = item.year;
    this.isExactYear = item.isExactYear;
    this.isCentury = item.isCentury;
    this.date = item.date;
    this.title = item.title;
    this.subTitle = item.subTitle;
    this.content = item.content;
    this.comment = item.comment;
    this.description = item.description;
    this.icon = item.icon;
    this.type = item.type;
    this.dynastyId = item.dynastyId;
    this.updateTime = item.updateTime;
  }

  get year() {
    let y = this._year;
    if (y < 0) {
      y = -y;
      if (y > 10000) {
        if (this.date === "前") {
          y = `${parseInt(y / 10000)}万年 ${this.date}`;
        } else {
          y = `公元前${parseInt(y / 10000)}万年`;
        }
      } else {
        if (this.isCentury) {
          y = `公元前${parseInt(y / 100) + 1}世纪`;
        } else {
          y = `公元前${y}年`;
        }
      }
    } else if (y > 0) {
      if (this.isCentury) {
        y = `公元${parseInt(y / 100) + 1}世纪`;
      } else {
        y = `公元${y}年`;
      }
    } else {
      y = "公元元年";
    }

    if (this.isExactYear) {
      return y;
    } else {
      return "约 " + y;
    }
  }

  set year(y) {
    this._year = y;
  }
}
