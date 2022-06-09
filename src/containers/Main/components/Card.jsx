import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Card as CardUI } from '../../../components'
import {
    LabelStyled,
    ValueStyled,
    CardCOntentStyled
} from './style'

function Card ({ value, label, color }) {
    return (
        <CardUI>
            <CardCOntentStyled color={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardCOntentStyled>
        </CardUI>
    )
}

export default memo(Card)