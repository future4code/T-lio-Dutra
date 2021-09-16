import { app } from "./app";
import { criarAtleta } from "./endpoints/criarAtleta";
import { criarCompeticaoCorrida } from "./endpoints/criarCompeticaoCorrida";
import { criarCompeticaoDardo } from "./endpoints/criarCompeticaoDardo";
import { rankingCorrida } from "./endpoints/rankingCorrida";
import { rankingDardo } from "./endpoints/rankingDardo";

app.get("/rankcorrida", rankingCorrida)
app.get("/rankdardo", rankingDardo)
app.post("/atleta", criarAtleta)
app.post("/compcorrida", criarCompeticaoCorrida)
app.post("/compdardo", criarCompeticaoDardo)