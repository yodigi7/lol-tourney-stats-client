interface BackendBody {
    apikey?: string;
}

interface ID {
    matchId?: string;
    tournamentCode?: string;
}

export interface GetStatsBody extends BackendBody {
    ids: Array<ID>;
}

export interface CreateTournamentBody extends BackendBody {
    name: string;
    providerId: number;
}

export interface CreateTournamentProviderBody extends BackendBody {
    region: string;
    url: string;
}

export interface CreateTournamentCodesBody extends BackendBody {
    count: number;
    tournamentId: number;
    teamSize?: number;
    mapType: string;
    pickType: string;
    spectatorType: string;
    metadata?: string;
}
