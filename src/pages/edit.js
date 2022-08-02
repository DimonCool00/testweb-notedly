<<<<<<< HEAD
import React from 'react';

import { useQuery, useMutation, gql } from '@apollo/client';

import NoteForm from '../components/NoteForm';

import { GET_NOTE, GET_ME} from '../gql/query';

import { EDIT_NOTE } from '../gql/mutation';


const EditNote = props => {
    const id = props.match.params.id;

    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
    
    const { data: userdata } = useQuery(GET_ME);
    
    const [editNote] = useMutation(EDIT_NOTE, {
        variables: {
            id
        },
        onCompleted: () => {
            props.history.push(`/note/${id}`);
        }
    });

    if (loading) return 'Loading...';
    if (error) return <p>Error!!! Note not found.</p>;
    if (userdata.me.id !== data.note.author.id) {
        return <p>You dont have access to edit this note.</p>
    }
    return <NoteForm content={data.note.content} action={editNote} />
};

=======
import React from 'react';

import { useQuery, useMutation, gql } from '@apollo/client';

import NoteForm from '../components/NoteForm';

import { GET_NOTE, GET_ME} from '../gql/query';

import { EDIT_NOTE } from '../gql/mutation';


const EditNote = props => {
    const id = props.match.params.id;

    const { loading, error, data } = useQuery(GET_NOTE, { variables: { id } });
    
    const { data: userdata } = useQuery(GET_ME);
    
    const [editNote] = useMutation(EDIT_NOTE, {
        variables: {
            id
        },
        onCompleted: () => {
            props.history.push(`/note/${id}`);
        }
    });

    if (loading) return 'Loading...';
    if (error) return <p>Error!!! Note not found.</p>;
    if (userdata.me.id !== data.note.author.id) {
        return <p>You dont have access to edit this note.</p>
    }
    return <NoteForm content={data.note.content} action={editNote} />
};

>>>>>>> 928aba49579e48f1af698213872b931faa7befa2
export default EditNote;