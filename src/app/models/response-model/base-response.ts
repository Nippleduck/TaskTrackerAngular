export interface BaseResponse<ResponseType>{
    data: ResponseType;
    success: boolean;
}