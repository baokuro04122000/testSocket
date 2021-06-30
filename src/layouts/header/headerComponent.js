import { Layout, Space } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {
    createFromIconfontCN
} from '@ant-design/icons';
import {signout} from '../../actions/userActions';
const { Header } = Layout;
const IconFont = createFromIconfontCN({
scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
export default function HeaderComponent() {
    const dispatch = useDispatch();
    const LogOut = () => {
        dispatch(signout());
    }
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>            
         <Space className="edit-header-children">
          <IconFont onClick={LogOut} type="icon-tuichu" />
         </Space>
      </Header>
    )
}
