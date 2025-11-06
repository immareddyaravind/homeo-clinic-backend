<?php

namespace App\Http\Controllers;

use App\Models\HomeBanner;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeBannerController extends Controller
{
    public function index()
    {
        $banners = HomeBanner::all();
        return view('admin.home-banners.index', compact('banners'));
    }

    public function create()
    {
        // Not needed - using index blade for create form
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('home-banners', 'public');
        }

        HomeBanner::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $imagePath
        ]);

        return redirect()->route('home-banners')->with('success', 'Banner created successfully.');
    }

    public function show(Request $request)
    {
        $query = HomeBanner::select('home_banners.*')->where('status', 1)->get();

        return response()->json([
            'success' => true,
            'data' => $query
        ]);
    }

    public function edit(HomeBanner $homeBanner)
    {
        return view('admin.home-banners.edit', compact('homeBanner'));
    }

    public function update(Request $request, HomeBanner $homeBanner)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        $data = [
            'title' => $request->title,
            'content' => $request->content
        ];

        // Handle image upload if new image is provided
        if ($request->hasFile('image')) {
            // Delete old image
            if ($homeBanner->image) {
                Storage::disk('public')->delete($homeBanner->image);
            }
            $data['image'] = $request->file('image')->store('home-banners', 'public');
        }

        $homeBanner->update($data);

        return redirect()->route('home-banners')->with('success', 'Banner updated successfully.');
    }

    public function destroy(HomeBanner $homeBanner)
    {
        // Delete image from storage
        if ($homeBanner->image) {
            Storage::disk('public')->delete($homeBanner->image);
        }
        
        $homeBanner->delete();

        return redirect()->route('home-banners')->with('success', 'Banner deleted successfully.');
    }

    public function toggleStatus($id)
    {
        $query = HomeBanner::findOrFail($id);
        $query->status = $query->status == 1 ? 0 : 1; // Toggle between 0 and 1
        $query->save();

        return back()->with('success', 'Status updated successfully');
    }
}