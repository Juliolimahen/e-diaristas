import React from "react";
import { Title } from "react-native-paper";

import {
    PageTitleContainer,
    PageTitleStyled,
    PageSubitleStyled
} from './PageTitle.style';

export interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC <PageTitleProps>= ({title, subtitle}) => {
    return (

        <PageTitleContainer>
            <PageTitleStyled>{title}</PageTitleStyled>
                <PageSubitleStyled>{subtitle}</PageSubitleStyled>
        </PageTitleContainer>

    );
};

export default PageTitle;