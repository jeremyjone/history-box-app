export class DynastyModel {
  constructor() {
    this.uid = -1;
    this.parentId = -1;
    this._startYear = 0;
    this.isExactStart = true;
    this.isCenturyStart = false;
    this._endYear = 0;
    this.isExactEnd = true;
    this.isCenturyEnd = false;
    this.name = "";
    this.comment = "";
    this.description = "";
    this.bgColor = "";
    this.updateTime = 0;
  }

  clear() {
    this.uid = -1;
    this.parentId = -1;
    this.startYear = 0;
    this.isExactStart = true;
    this.isCenturyStart = false;
    this.endYear = 0;
    this.isExactEnd = true;
    this.isCenturyEnd = false;
    this.name = "";
    this.comment = "";
    this.description = "";
    this.bgColor = "";
    this.updateTime = 0;
  }

  setItem(item) {
    this.uid = item.uid;
    this.parentId = item.parentId;
    this.startYear = item.startYear;
    this.isExactStart = item.isExactStart;
    this.isCenturyStart = item.isCenturyStart;
    this.endYear = item.endYear;
    this.isExactEnd = item.isExactEnd;
    this.isCenturyEnd = item.isCenturyEnd;
    this.name = item.name;
    this.comment = item.comment;
    this.description = item.description;
    this.bgColor = item.bgColor;
    this.updateTime = item.updateTime;
  }

  get startYear() {
    let y = this._startYear;
    if (y < 0) {
      y = -y;
      if (y > 10000) {
        y = `公元前${parseInt(y / 10000)}万年`;
      } else {
        if (this.isCenturyStart) {
          y = `公元前${parseInt(y / 100) + 1}世纪`;
        } else {
          y = `公元前${y}年`;
        }
      }
    } else if (y > 0) {
      if (this.isCenturyStart) {
        y = `公元${parseInt(y / 100) + 1}世纪`;
      } else {
        y = `公元${y}年`;
      }
    } else {
      y = "公元元年";
    }

    if (this.isExactStart) {
      return y;
    } else {
      return "约 " + y;
    }
  }

  set startYear(y) {
    this._startYear = y;
  }

  get endYear() {
    let y = this._endYear;
    if (y < 0) {
      y = -y;
      if (y > 10000) {
        y = `公元前${parseInt(y / 10000)}万年`;
      } else {
        if (this.isCenturyEnd) {
          y = `公元前${parseInt(y / 100) + 1}世纪`;
        } else {
          y = `公元前${y}年`;
        }
      }
    } else if (y > 0) {
      if (this.isCenturyEnd) {
        y = `公元${parseInt(y / 100) + 1}世纪`;
      } else {
        y = `公元${y}年`;
      }
    } else {
      y = "公元元年";
    }

    if (this.isExactEnd) {
      return y;
    } else {
      return "约 " + y;
    }
  }

  set endYear(y) {
    this._endYear = y;
  }
}
