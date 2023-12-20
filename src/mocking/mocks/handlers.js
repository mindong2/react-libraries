import { http, HttpResponse } from "msw";

import users from "./users.json";

// handler 속에서 test용 임시 api역할을 하는것들
export const handlers = [
  http.get("/users", () => {
    return HttpResponse.json(users);
  }),

  http.get("/name", () => {
    return HttpResponse.json([{ id: 1, name: "dongmin", email: "qlsnaos12@naver.com" }]);
  }),
];
