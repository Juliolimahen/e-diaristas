<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diarista extends Model
{
    use HasFactory;

    /**
     * Difine os campos  que podem ser gravados
     *
     * @var array
     */

    protected $fillable = ['nome_completo', 'cpf', 'email', 'telefone', 'logradouro', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'cep', 'codigo_ibge', 'foto_usuario'];

    /**
     * Difine os campos usados na serializção
     *
     * @var array
     */


    protected $visible = ['nome_completo', 'cidade', 'foto_usuario', 'reputacao'];

    protected $appends = ['reputacao'];



    /**
     * Muda a URL da imagem
     * @param string $valor
     * @return
     */

    public function getFotoUsuarioAttribute(string $valor)
    {
        return config('app.url') . '/' . $valor;
    }

    /**
     * Busca diaristas por codigo Ibge
     * @param integer $codigoIbge
     * @return void
     */

    static public function buscaPorCodigoIbge(int $codigoIbge)
    {
        return self::where('codigo_ibge', $codigoIbge)->limit(6)->get();
    }

    /**
     * Retorna a reputação randomica
     * @param [type] $valor
     * @return void
     */

    public function getReputacaoAttribute($valor)
    {
        return mt_rand(1, 5);
    }
    /**
     * Busca diaristas por codigo Ibge
     * @param integer $codigoIbge
     * @return void
     */
    static public function quantidadePorIbge(int $codigoIbge)
    {
        $quantidade = self::where('codigo_ibge', $codigoIbge)->count();

        return $quantidade > 6 ? $quantidade - 6 : 0;
    }
}