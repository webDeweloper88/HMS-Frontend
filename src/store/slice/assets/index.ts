import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBemorAssets } from '../../thunks/assets';

export interface Asset {
    id: string;
    fio: string;
    jinsi: string;
    tugilgan_sana: string;
    buyi: string;
    vazni: string;
    tana_xarorati: string;
    manzili: string;
    ish_joyi: string;
    qayerdan_yuborilgan: string;
    yuborilgan_tashxis: string;
    qabulxona_tashxisi: string;
    shoshilinch_keltirilgan: string;
    qanday_transportda: string;
    createdAt: string;
    updatedAt: string;
}

export interface IBemorState {
    bemorData: {
        bemor_id: string;
        FIO: string;
        jinsi: string;
        tugilgan_sana: string;
        buyi: string;
        vazni: string;
        tana_xarorati: string;
        manzili: string;
        ish_joyi: string;
        qayerdan_yuborilgan: string;
        yuborilgan_tashxis: string;
        qabulxona_tashxisi: string;
        shoshilinch_keltirilgan: string;
        qanday_transportda: string;
        createdAt: string;
        updatedAt: string;
    };
    assets: Asset[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: IBemorState = {
    bemorData: {
        bemor_id: '',
        FIO: '',
        jinsi: '',
        tugilgan_sana: '',
        buyi: '',
        vazni: '',
        tana_xarorati: '',
        manzili: '',
        ish_joyi: '',
        qayerdan_yuborilgan: '',
        yuborilgan_tashxis: '',
        qabulxona_tashxisi: '',
        shoshilinch_keltirilgan: '',
        qanday_transportda: '',
        createdAt: '',
        updatedAt: '',
    },
    assets: [] as Asset[],
    status: 'idle',
    error: null,
};



export const bemorSlice = createSlice({
    name: 'bemor',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBemorAssets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getBemorAssets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.assets = action.payload;
            })
            .addCase(getBemorAssets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? action.error.toString();
            });
    },
});

export default bemorSlice;