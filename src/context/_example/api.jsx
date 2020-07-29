import { axiosInstance } from '../../core/axios';

export const _post = async (data) =>
  await axiosInstance(``, {
    method: 'POST',
    data
  });

export const _put = async (id, data) =>
  await axiosInstance(`${id}`, {
    method: 'PUT',
    data
  });

export const _delete = async (id) =>
  await axiosInstance(`${id}`, {
    method: 'DELETE'
  });
