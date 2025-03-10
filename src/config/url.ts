const PREFIX = {
  CLUB: "/club",
  BOARD: "/board",
};

const URL = {
  mainUrl: "/",

  // auth
  loginUrl: "/login",
  loginSuccessUrl: "/login-success",
  registerUrl: "/register",
  mypageUrl: "/my-page",

  // club
  clubUrl: PREFIX.CLUB,
  clubCreateUrl: `${PREFIX.CLUB}/create`,
  clubDetailUrl: `${PREFIX.CLUB}/:clubId`,
  clubEditUrl: `${PREFIX.CLUB}/:clubId/edit`,
  clubListUrl: `${PREFIX.CLUB}s`,

  // board
  developBoard: `${PREFIX.BOARD}/develop`,
  freeBoard: `${PREFIX.BOARD}/free`,
  noticeBoard: `${PREFIX.BOARD}/notice`,
  qnaBoard: `${PREFIX.BOARD}/qna`,
};

export default URL;
