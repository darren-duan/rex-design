import React from 'react';
import axios from 'axios';
import { Group, FilePicker, MediaPicker } from '@rexd/core';

export default { title: 'FilePicker', component: FilePicker };

const files = [
  {
    id: '01',
    name: 'IMG.png',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  },
  {
    id: '02',
    name: 'test.png',
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  },

  {
    id: '03',
    name: 'test.png',
    url: 'https://img.alicdn.com/tfs/TB1gjPyp9slXu8jSZFuXXXg7FXa-750-272.png',
  },
];

const getRequest = (options: any) =>
  axios({
    method: 'post',
    url: 'http://127.0.0.1:7001/api/upload',
    transformResponse: [].concat(axios.defaults.transformResponse, (data: any) => {
      return {
        url: data.data,
        message: data.message,
      };
    }),
    onUploadProgress: (e) => {
      console.log(e);
      // TODO: display progress info
    },
    ...options,
  }).then((ret) => {
    return ret.data;
  });

export const Basic = () => (
  <Group spacingY="l" display="block">
    <FilePicker defaultValue={files} request={getRequest} onChange={console.log} />

    <FilePicker defaultValue={files} disabled onChange={console.log} />
  </Group>
);

export const Media = () => {
  return (
    <Group spacingY="l">
      <MediaPicker defaultValue={files} request={getRequest} onChange={console.log} />

      <MediaPicker defaultValue={files} request={getRequest} onChange={console.log} disabled />
    </Group>
  );
};

/**
 * 拖拽上传
 */
export const DragFile = () => {
  return (
    <Group spacingY="l" width="800px">
      <FilePicker
        renderTrigger={(props) => <FilePicker.DragFileTrigger {...props} />}
        request={getRequest}
        onChange={console.log}
      />
      <FilePicker
        renderTrigger={(props) => <FilePicker.DragFileTrigger {...props} />}
        request={getRequest}
        onChange={console.log}
        disabled
      />
    </Group>
  );
};

export const Status = () => {
  const files = [
    {
      id: '01',
      name: 'img.png',
      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      status: 'success',
    },
    {
      id: '02',
      name: 'test.png',
      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      status: 'error',
    },
    {
      id: '03',
      name: 'test02.png',
      url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
      status: 'process',
    },
  ];
  return (
    <Group spacingY="l" display="block">
      <FilePicker defaultValue={files} onChange={console.log} />
      <MediaPicker defaultValue={files} onChange={console.log} />
    </Group>
  );
};

export const FileTypes = () => {
  // 只能选图片
  return <MediaPicker accept="image/*" onChange={console.log} />;
};

export const Multiple = () => {
  return <FilePicker multiple onChange={console.log} />;
};
