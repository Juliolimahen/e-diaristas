<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ViaCEP
{
    /**
     * Consulta CEP no viaCEP
     *
     */

    public function buscar(string $cep)
    {
        $url = sprintf('https://viacep.com.br/ws/%s/json/', $cep);

        $resposta = Http::get($url);

        if ($resposta->failed()) {
            return false;
        }

        $dados = $resposta->json();

        if (isset($dados['erro']) && $dados['erro'] === true) {
            return false;
        }

        return $dados;
    }
}