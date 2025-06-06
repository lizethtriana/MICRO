<?php


namespace App\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use App\Models\Retro_item;

class Retro_itemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rows= Retro_item::all();
        return response()->json(
            [ 'data'=> $rows],200
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $newRetro_Item = new Retro_item();
        $newRetro_Item->sprint_id = $data['sprint_id'];
        $newRetro_Item->categoria = $data['categoria'];
        $newRetro_Item->descripcion = $data['descripcion'];
        $newRetro_Item->cumplida = $data['cumplida'];
        $newRetro_Item->fecha_revision = $data['fecha_revision'];
        $newRetro_Item->save();
        return response()->json(['data' => 'Datos guardados'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $row = Retro_item::find($id);
        if (empty($row)) {
            return response()->json(['data' => 'No existe'], 404);
        }
        return response()->json(['data' => $row], 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $row = Retro_item::find($id);
        if (empty($row)) {
            return response()->json(['data' => 'No existe'], 404);
        }
        $data = $request->all();
        $row->sprint_id = $data['sprint_id'];
        $row->categoria = $data['categoria'];
        $row->descripcion = $data['descripcion'];
        $row->cumplida = $data['cumplida'];
        $row->fecha_revision = $data['fecha_revision'];
        $row->save();
        return response()->json(['data' => 'Datos guardados'], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         $row = Retro_item::find($id);
        if (empty($row)) {
            return response()->json(['data' => 'No existe'], 404);
        }
        $row->delete();
        return response()->json(['data' => 'Datos eliminados'], 200);
    }
}
