import { ResponseModel } from '../model';
import { apiFetch } from '../api';

export interface LoginPostFetchParams {
  /**
   * 이메일 아이디
   */
  email: string;

  /**
   * 비밀번호
   */
  password: string;
}

export interface LoginResponse extends ResponseModel {
  /**
   * access 토큰
   */

  token: string;

  user: {
    /**
     * 이메일 아이디
     */
    emailId: string;

    /**
     * 유저 이름
     */
    userName: string;

    /**
     * 유저 닉네임
     */
    nickName: string;

    /**
     * 회원 가입 일자
     */
    createdAt: string;

    /**
     * 회원 정보 수정 일자
     */
    updateAt: string;

    _id: string;
  };
}

/**
 * 유저 정보 조회
 */
export const loginPostFetch = (params: LoginPostFetchParams) =>
  apiFetch.post<LoginResponse>('/user/login', params);
