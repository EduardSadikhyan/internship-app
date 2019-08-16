<?php

namespace App\Http\Controllers;

use\App\Task;
use Illuminate\Http\Request;

class forTask extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $models = Task::query()->get();
        return $models;
    }


    /**
     * Store a newly created resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'title' => 'required|string|max:100',
            'description' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failedqq',
                'status' => 'failed',
                'errors' => $validator->errors()
            ]);
        }
        $model = new Task();
        $model->title = $request->get('title');
        $model->description = $request->get('description');
        $model->save();

        return response()->json([
            'message' => 'Task Saved Successfully',
            'status' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = Task::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Task does not exist',
                'status' => 'fail',
            ]);
        }
        return $model;
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
        $model = Task::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Task does not exist',
                'status' => 'fail',
            ]);
        }
        $model->title = $request->get('title');
        $model->description = $request->get('description');
        $model->save();

        return response()->json([
            'message' => 'Task Updated Successfully',
            'status' => 'success',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $model = Task::query()->find($id);
        if (!$model) {
            return response()->json([
                'message' => 'Task does not exist',
                'status' => 'fail',
            ]);
        }
        $model->delete();

        return response()->json([
            'message' => 'Task Deleted Successfully',
            'status' => 'success',
        ]);
    }
}


