import { apiSlice } from './apiSlice';

export type LoginRequestBody = {
  identifier?: string;
  email?: string;
  password: string;
};

export type LoginResponseBody = {
  token?: string;
  email?: string;
  userName?: string;
  success?: boolean;
  message?: string;
};

export type RegistrationRequestBody = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  password: string;
};

export type ResetPasswordRequestBody = {
  email: string;
  otp: string;
  newPassword: string;
};

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation<string, { identifier: string }>({
      query: (body) => ({
        url: '/auth/send-otp',
        method: 'POST',
        body,
      }),
    }),
    sendRegistrationEmailOtp: builder.mutation<string, { email: string }>({
      query: (body) => ({
        url: '/auth/register/send-otp/email',
        method: 'POST',
        body,
      }),
    }),
    sendRegistrationPhoneOtp: builder.mutation<string, { phoneNumber: string }>({
      query: (body) => ({
        url: '/auth/register/send-otp/phone',
        method: 'POST',
        body,
      }),
    }),
    verifyOtp: builder.mutation<string, { identifier: string; otp: string }>({
      query: (body) => ({
        url: '/auth/verify-otp',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<string, RegistrationRequestBody>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<LoginResponseBody, LoginRequestBody>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation<string, ResetPasswordRequestBody>({
      query: (body) => ({
        url: '/auth/reset-password',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSendOtpMutation,
  useSendRegistrationEmailOtpMutation,
  useSendRegistrationPhoneOtpMutation,
  useVerifyOtpMutation,
  useRegisterMutation,
  useLoginMutation,
  useResetPasswordMutation,
} = authApi;
