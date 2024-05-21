// export const getUserProfile = async (userID) => {
//   const { code, data } = await tim.getUserProfile({
//     userIDList: userID,
//   });
//   return { code, data };
// };

import tim from "@/utils/IM/im-sdk/tim";
import http from "@/utils/http/index";

/**
 * 更新我的个人资料
 * @param {Object} profile 更新的个人资料对象
 * @param {string} profile.nick 昵称
 * @param {string} profile.avatar 头像
 * @param {string} profile.gender 性别
 * @param {string} profile.selfSignature 个性签名
 * @param {string} profile.allowType 允许类型
 * @returns {Promise<{ code: number, data: any }>} 更新结果
 */
export const updateMyProfile = async (profile) => {
  const { code, data } = await tim.updateMyProfile({
    ...profile,
  });
  return { code, data };
};

export const getUserProfile = (data) => {
  return http({
    url: "friend/get_friend",
    method: "post",
    data,
  });
};
