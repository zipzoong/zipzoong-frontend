import React from 'react';
import MyPageLayout from '@/layouts/MyPageLayout';
import { GetServerSideProps } from 'next';
import { users } from '@zipzoong/sdk/lib/functional';
import connection from '@/lib/connection';
import { ICustomer } from '@zipzoong/sdk/lib/structures/user/customer';
import { useRecoilValue } from 'recoil';
import service from '@/constants/service.constants';

interface MyPageSSRPropsType {
  data: ICustomer.IPrivate;
}

const MyPage = ({ data }: MyPageSSRPropsType) => {
  const [more, setMore] = React.useState<users.hs_providers.me.get.Output | users.re_agents.me.get.Output>({
    example_images: [
      {
        is_visible: true,
        id: '',
        url: '',
        created_at: '',
        updated_at: ''
      }
    ],
    phone: '',
    profile_image_url: '',
    introduction: {
      title: '',
      content: ''
    },
    expertise: {
      super_category_id: '',
      super_category_name: '',
      sub_expertises: [
        {
          sub_category_id: '',
          sub_category_name: ''
        }
      ]
    },
    address: {
      first: '',
      second: ''
    },
    business_registration_num: '',
    type: 'home service provider',
    mode: 'private',
    id: '',
    name: '',
    email: '',
    created_at: '',
    updated_at: '',
    is_verified: true,
    business_certification_images: [
      {
        id: '',
        url: '',
        created_at: '',
        updated_at: ''
      }
    ],
    acceptant_agreements: [
      {
        id: '',
        title: '',
        content: '',
        target_type: 'customer',
        is_required: true
      }
    ]
  });
  React.useLayoutEffect(() => {
    (async () => {
      if (data.type === service.HS_PROVIDER) setMore(await users.hs_providers.me.get(connection));
      if (data.type === service.RE_AGENTS) setMore(await users.re_agents.me.get(connection));
    })();
  }, []);

  return <MyPageLayout data={data} major={more} />;
};

const executeAPI = async () => {
  try {
    return await users.customers.me.get(connection);
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await executeAPI();
  if (!res) return { notFound: true };

  return {
    props: {
      data: res
    }
  };
};

export default MyPage;
