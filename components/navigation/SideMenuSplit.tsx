import classNames from 'classnames';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useClickAway } from 'react-use';
import { UI } from '../../constants';
import { collapseSideMenu } from '../../state/navigation';
import { IState } from '../../state/reducers';
import { SideMenuInner } from './SideMenuInner';
import { SideBarMode, SideMenuSideBar } from './SideMenuSideBar';

export function SideMenuSplit() {
  const { sideMenuSplit, sideMenuExpanded } = useSelector(
    (state: IState) => state.navigation,
  );

  const ref = useRef(null);
  const dispatch = useDispatch();

  const onClickAway = () => {
    if (sideMenuExpanded && !sideMenuSplit) {
      dispatch(collapseSideMenu());
    }
  };

  useClickAway(ref, onClickAway);

  const transform =
    sideMenuSplit || sideMenuExpanded
      ? 'translateX(0)'
      : `translateX(-100%) translateX(${UI.SIDE_MENU_SIDE_BAR_WIDTH_PX - 1}px)`;

  return (
    <div
      ref={ref}
      style={{
        minWidth: '50vw',
        zIndex: 30033,
        height: sideMenuSplit
          ? 'unset'
          : `calc(100vh - ${UI.HEADER_HEIGHT_PX}px`,
        transform,
      }}
      className={classNames(
        'flex text-primary bg-alt duration-300',
        sideMenuSplit ? 'relative' : 'fixed',
      )}
    >
      <div
        style={{
          height: `calc(100vh - ${UI.HEADER_HEIGHT_PX}px`,
        }}
        className="w-full overflow-y-auto"
      >
        <SideMenuInner />
      </div>

      <SideMenuSideBar mode={SideBarMode.LABEL} />
    </div>
  );
}
