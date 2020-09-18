import React from 'react'
import {Inner, Container,Item, Pane, Title, SubTitle,Image } from './styles/jumbotron'

export default function Jumbotron({children, direction ='row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    )
}


Jumbotron.Container = function JumbotornContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
Jumbotron.Pane = function JumbotornPane({children, ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}
Jumbotron.Title = function JumbotornTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Jumbotron.SubTitle = function JumbotornSubTitle({children, ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = function JumbotornImage({children, ...restProps}) {
    return <Image {...restProps} />
}

