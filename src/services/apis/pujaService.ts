import axiosInstance from '../network/axiosInstance';

export const fetchPuja = async () => {
  try {
    const response = await axiosInstance.get('kriya/all', {
      params: {
        eventType: '111',
        page: 0,
      },
    });
     console.log(response.data)
    return response.data;
   
  } catch (error) {
   
    throw error;
  }
};