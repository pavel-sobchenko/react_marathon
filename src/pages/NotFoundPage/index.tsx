import React from 'react';
import Button from '../../components/Button';
import {navigate} from 'hookrouter';
import { ButtonColor, ButtonSize } from '../../components/Button/Button.Interface';
import { LinkEnum } from '../../../routes';

const NotFoundPage = () => {
    return (
      <div>
          NOT FOUND PAGE!!!!
          <Button
            size={ButtonSize.small}
            color={ButtonColor.red}
            onClick={() => navigate(LinkEnum.HOME)}
          >
              Return
          </Button>
      </div>
    );
};

export default NotFoundPage;
