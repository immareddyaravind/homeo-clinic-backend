<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PageController extends Controller
{
    public function index()
    {
        $pages = Page::all();
        return view('admin.pages.index', compact('pages'));
    }

    public function create()
    {
        return view('admin.pages.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        Page::create([
            'name' => $request->name
        ]);

        return redirect()->route('pages')->with('success', 'Data created successfully.');
    }

    public function show(Request $request)
    {
        $query = Page::select('pages.*')->where('status', 1)->get();

        return response()->json([
            'success' => true,
            'data' => $query
        ]);
    }

    public function edit(Page $page)
    {
        return view('admin.pages.edit', compact('page'));
    }

    public function update(Request $request, Page $page)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $data = [
            'name' => $request->name
        ];

        $page->update($data);

        return redirect()->route('pages')->with('success', 'Data updated successfully.');
    }

    public function destroy(Page $page)
    {
        $page->delete();
        
        return redirect()->route('pages')->with('success', 'Data deleted successfully.');
    }

    public function toggleStatus($id)
    {
        $query = Page::findOrFail($id);
        $query->status = $query->status == 1 ? 0 : 1; // Toggle between 0 and 1
        $query->save();

        return back()->with('success', 'Status updated successfully');
    }
}