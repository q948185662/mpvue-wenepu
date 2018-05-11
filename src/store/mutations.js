export default {
  SET_APP_TOKEN (state, appToken) {
    state.appToken = appToken
  },
  SET_WEB_TOKEN (state, webToken) {
    state.webToken = webToken
  },
  SET_USER (state, user) {
    state.user = user
  },
  SET_SEMESTER_LIST (state, semesterList) {
    state.semesterList = semesterList
  },
  SET_SCORES (state, scores) {
    scores.scoreList.forEach(scoreItem => {
      scoreItem.visible = false
    })
    state.scores = scores
  },
  SET_SCORE_DETAIL (state, scoreDetail) {
    state.scoreDetail = scoreDetail
  }
}
