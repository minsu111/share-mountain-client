import { ResponseModel } from '../model';
import { multiApiFetch } from '../api';

export interface UploadPostFetchParams {
  //   userNickName: string;
  //   mountainName: string;
  //   postImages: string[];
  //   postText: string;
  formData: { string: string };
  selectedMountain: string;
  userNickName: string;
}

export interface UploadPostResponse extends ResponseModel {}

export const uploadPostFetch = (
  formData: FormData,
  selectedMountain: string,
  userNickName: string
) => {
  multiApiFetch.post<UploadPostResponse>(
    `/post/add/${selectedMountain}/${userNickName}`,
    formData
  );
};
