<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::all();

        return json_encode($tasks);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $tasks = Task::create([
            'task' => $request->task,
            'status' =>$request->status
        ]);

        return response()->json($tasks);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tasks = Task::where('id', $id)->update([
            'status' => $request->status
        ]);

        return response()->json($tasks);
    }

    /**
     * Completing All Active Data
     */
    public function completeAll(Request $request, $status)
    {
        $tasks = Task::where('status', $status)->update([
            'status' => $request->status
        ]);

        return response()->json($tasks);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tasks = Task::destroy($id);

        return response()->json($tasks);
    }

    /**
     * Delete All Completed Data
     */
    public function clearCompleted($status)
    {
        return Task::where('status', $status)->delete();
    }
}
