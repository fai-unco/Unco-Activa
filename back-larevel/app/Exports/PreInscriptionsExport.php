<?php

namespace App\Exports;

use App\Models\Inscription;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromCollection;
// use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithMapping;
use Illuminate\Support\Facades\Log;

class PreInscriptionsExport implements FromCollection, ShouldAutoSize, WithHeadings, WithMapping
{
    use Exportable;

    protected $lookup;

    public function __construct()
    {
        $path = storage_path('app/sorted_dnis.json');

        if (!file_exists($path)) {
            Log::warning('PreInscriptionsExport: no se encontró sorted_dnis.json en storage/app');
            $this->lookup = [];
            return;
        }

        $json = file_get_contents($path);
        $data = json_decode($json, true);

        // Validamos estructura y normalizamos a int
        $dnis = $data['dnis'] ?? [];

        // Convertimos a set para búsqueda rápida
        $this->lookup = array_flip(array_map('intval', $dnis));
    }

    public function collection()
    {
        return  Inscription::join('race_categories', 'race_categories.id', '=', 'inscriptions.race_categorie_id')
        ->whereNull('billing_verified_at')
        ->whereNull('verification_denied')
        ->get([
            'inscriptions.id',
            'race_categories.name as catagorie_name',
            'inscriptions.name',
            'inscriptions.surname',
            'inscriptions.birth',
            'inscriptions.dni',
            'inscriptions.phone',
            'inscriptions.email',
            'inscriptions.gender',
            'inscriptions.emergency_contac_phone',
            'inscriptions.shirt_size'
        ]);
    }

    public function headings(): array
    {
        return [
            'ID',
            'DISTANCIA',
            'NOMBRE',
            'APELLIDO',
            'FECHA DE NACIMIENTO',
            'DNI',
            'TELEFONO',
            'EMAIL',
            'GENERO',
            'EMERGENCIA',
            'TALLE',
            'COMUNIDAD UNIVERSITARIA'
        ];
    }

    public function map($row): array
    {
        return [
            $row->id,
            $row->catagorie_name,
            $row->name,
            $row->surname,
            $row->birth,
            $row->dni,
            $row->phone,
            $row->email,
            $row->gender,
            $row->emergency_contac_phone,
            $row->shirt_size,
            isset($this->lookup[$row->dni]) ? 'Si' : 'No' // Pertenece a la comunidad universitaria
        ];
    }
}
