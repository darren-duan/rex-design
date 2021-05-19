import React, { useState } from 'react';
import { Box, Button, Group } from '@rexd/core';
import { Icon } from '@rexd/icon';

export default { title: 'Button' };

export function Basic() {
  return (
    <Box>
      <Group>
        <Button>按钮</Button>
      </Group>
      <Group mt="l">
        <Button type="normal">普通按钮</Button>
        <Button type="primary">焦点按钮</Button>
        <Button type="secondary">次级按钮</Button>
        <Button disabled>禁用按钮</Button>
      </Group>
      <Group mt="l">
        <Button shape="warning" type="normal">
          普通警告按钮
        </Button>
        <Button shape="warning" type="primary">
          焦点警告按钮
        </Button>
      </Group>
      <Group mt="l">
        <Button shape="text" type="normal">
          普通文本按钮
        </Button>
        <Button shape="text" type="primary">
          焦点链接按钮
        </Button>
        <Button shape="text" type="primary" disabled>
          焦点链接按钮
        </Button>
      </Group>
    </Box>
  );
}

/**
 * 与文本按钮相比，链接型按钮没有内间距
 */
export function LinkButton() {
  return (
    <Group>
      <Button shape="link" type="normal">
        普通链接按钮
      </Button>
      <Button shape="link" type="primary">
        焦点链接按钮
      </Button>
    </Group>
  );
}

export function Size() {
  return (
    <Box>
      <Group>
        <Button size="small" leftElement={<Icon type="calendar" />}>
          小尺寸按钮
        </Button>
        <Button size="medium" leftElement={<Icon type="calendar" />}>
          中尺寸按钮
        </Button>
        <Button size="large" leftElement={<Icon type="calendar" />}>
          大尺寸按钮
        </Button>
      </Group>
      <Group mt="l">
        <Button size="small" leftElement={<Icon type="arrow-left-bold" />}>
          小尺寸按钮
        </Button>
        <Button size="medium" leftElement={<Icon type="arrow-left-bold" />}>
          中尺寸按钮
        </Button>
        <Button size="large" leftElement={<Icon type="arrow-left-bold" />}>
          大尺寸按钮
        </Button>
      </Group>
      <Group mt="l">
        <Button size="small" isIconOnly>
          <Icon type="arrow-left-bold" />
        </Button>
        <Button size="medium" isIconOnly>
          <Icon type="arrow-left-bold" />
        </Button>
        <Button size="large" isIconOnly>
          <Icon type="arrow-left-bold" />
        </Button>
      </Group>
    </Box>
  );
}

export const FullWidth = () => (
  <Button type="primary" isFullWidth>
    整行按钮
  </Button>
);

export const AddIcon = () => (
  <Group>
    <Button leftElement={<Icon type="email" />} type="primary">
      邮箱
    </Button>
    <Button rightElement={<Icon type="arrow-right" />}>点击了解更多</Button>

    <Button shape="text" leftElement={<Icon type="add" />}>
      新建
    </Button>
  </Group>
);

/**
 * 仅图标的按钮
 */
export const OnlyIcon = () => (
  <Group>
    <Button size="small" isIconOnly>
      <Icon type="calendar" />
    </Button>
    <Button size="medium" isIconOnly>
      <Icon type="calendar" />
    </Button>
    <Button size="large" isIconOnly>
      <Icon type="calendar" />
    </Button>
    <br />
    <Button shape="text" size="small" isIconOnly>
      <Icon type="calendar" />
    </Button>
    <Button shape="text" size="medium" isIconOnly>
      <Icon type="calendar" />
    </Button>
    <Button shape="text" size="large" isIconOnly>
      <Icon type="calendar" />
    </Button>
  </Group>
);

export const Loading = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Group>
      <Button loading={loading} onClick={() => setLoading(!loading)}>
        点击切换加载状态
      </Button>
      <Button type="primary" loading={loading} onClick={() => setLoading(!loading)}>
        点击切换加载状态
      </Button>
    </Group>
  );
};

export const ButtonGroup = () => (
  <Group>
    <Group isAttached>
      <Button>Left Button</Button>
      <Button>Center Button</Button>
      <Button>Right Button</Button>
    </Group>
    <br />
    <br />
    <Group>
      <Button>Left Button</Button>
      <Button>Center Button</Button>
      <Button>Right Button</Button>
    </Group>
  </Group>
);

export const Toggle = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <Button isSelected={isSelected} onClick={() => setIsSelected(!isSelected)}>
      {isSelected ? '已订阅' : '订阅'}
    </Button>
  );
};

export const Toggled = () => {
  return (
    <Group>
      <Button isSelected>已订阅</Button>
      <Button isSelected type="primary">
        已订阅
      </Button>
      <Button isSelected type="secondary">
        已订阅
      </Button>
      <Button isSelected type="primary" shape="warning">
        已订阅
      </Button>
      <Button isSelected type="primary" shape="text">
        已订阅
      </Button>
    </Group>
  );
};

export const ToggleGroup = () => {
  const [active, setActive] = useState('pc');
  return (
    <Group>
      <Group isAttached>
        <Button isSelected={active === 'pc'} onClick={() => setActive('pc')}>
          <Icon type="electronics" />
        </Button>
        <Button isSelected={active === 'pad'} onClick={() => setActive('pad')}>
          <Icon type="pad" />
        </Button>
        <Button isSelected={active === 'phone'} onClick={() => setActive('phone')}>
          <Icon type="mobile-phone" />
        </Button>
      </Group>
    </Group>
  );
};
