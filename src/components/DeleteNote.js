<<<<<<< HEAD
import React from 'react';

import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router';

import ButtonAsLink from './ButtonAsLink';

import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

const DeleteNote = props => {

    const [deleteNote] = useMutation(DELETE_NOTE, {
        variables: {
            id: props.noteId
        },
        refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES}],
        onCompleted: data => {
            props.history.push('/mynotes');
        }
    });

    return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>
};

=======
import React from 'react';

import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router';

import ButtonAsLink from './ButtonAsLink';

import { DELETE_NOTE } from '../gql/mutation';
import { GET_MY_NOTES, GET_NOTES } from '../gql/query';

const DeleteNote = props => {

    const [deleteNote] = useMutation(DELETE_NOTE, {
        variables: {
            id: props.noteId
        },
        refetchQueries: [{ query: GET_MY_NOTES, GET_NOTES}],
        onCompleted: data => {
            props.history.push('/mynotes');
        }
    });

    return <ButtonAsLink onClick={deleteNote}>Delete Note</ButtonAsLink>
};

>>>>>>> 928aba49579e48f1af698213872b931faa7befa2
export default withRouter(DeleteNote);