import React, { CSSProperties, useState } from 'react';
import classNames from 'classnames';

import { Tab } from 'models';
import SpringLoad from 'components/common/SpringLoad';

import * as S from './styles';

type AppProps = {
  data: Tab[];
  titleClass?: string;
  contentClass?: string;
  isEqualWidth?: boolean;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
};

const Tabs = ({
  data,
  style,
  titleClass,
  contentClass,
  contentStyle,
  isEqualWidth,
}: AppProps) => {
  const [visibleTab, setVisibleTab] = useState(data[0].id);
  const width = 100 / data.length;

  const listContent = data.map(
    (item: Tab) =>
      visibleTab === item.id && (
        <div key={item.id}>{item.content}</div>
      ),
  );

  const handleTab = (item: Tab) => {
    setVisibleTab(item.id);
  };

  const getSelectedTabIndex = () =>
    data.findIndex((item) => item.id === visibleTab);

  return (
    <>
      <S.Tabs style={style}>
        <S.AnimatedLine
          style={{
            left: `calc((100% / ${
              data.length
            }) * ${getSelectedTabIndex()})`,
            width: `calc(100% / ${data.length})`,
          }}
        />

        {data.map((item: Tab) => (
          <S.TabTitle
            key={`${item.title}${item.id}`}
            onClick={() => handleTab(item)}
            className={classNames(
              visibleTab === item.id ? 'active' : '',
              titleClass,
            )}
            style={{ width: isEqualWidth ? `${width}%` : 'auto' }}
          >
            {item.title}
          </S.TabTitle>
        ))}
      </S.Tabs>

      <S.TabContent className={contentClass} style={contentStyle}>
        <SpringLoad>{listContent}</SpringLoad>
      </S.TabContent>
    </>
  );
};

Tabs.defaultProps = {
  style: {},
  titleClass: '',
  contentClass: '',
  isEqualWidth: false,
  contentStyle: {},
};

export default Tabs;
