@extends('layouts.app')

@section('content')
<div class="row">
    <div class="col-md-12">
        @if(session('success'))
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                {{ session('success') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            </div>
        @endif

        <div class="card">
            <div class="card-header">
                <h5 class="card-title">Patient: {{ $patient->full_name }}</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4"><strong>Phone:</strong> {{ $patient->phone_number }}</div>
                    <div class="col-md-4"><strong>Email:</strong> {{ $patient->email_address ?? '—' }}</div>
                    <div class="col-md-4"><strong>Total Appointments:</strong> {{ $patient->appointments->count() }}</div>
                </div>
            </div>
        </div>

        <div class="card mt-4">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="card-title">Last Visits (Symptoms & Notes)</h5>
                <button id="ai-status-btn" class="btn btn-sm btn-success">
                    <i class="fas fa-robot"></i> AI Online
                </button>
            </div>
            <div class="card-body">
                @if($visits->count() > 0)
                    <div class="table-responsive" style="max-height: 300px; overflow-y: auto;">
                        <table class="table table-striped" style="table-layout: auto; width: 100%;">
                            <thead>
                                <tr>
                                    <th style="width: 15%;">Date</th>
                                    <th style="width: 42.5%;">Symptoms</th>
                                    <th style="width: 42.5%;">Medical Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($visits as $visit)
                                    <tr style="vertical-align: top;">
                                        <td>{!! \Carbon\Carbon::parse($visit->visit_date)->format('d-m-Y') !!}</td>
                                        <td style="word-wrap: break-word; overflow-wrap: break-word;">
                                            <div class="visit-content">
                                                <span class="short-text" style="display: inline-block; width: 100%;">{{ Str::limit($visit->symptoms ?? '', 100) }}</span>
                                                @if(strlen($visit->symptoms ?? '') > 100)
                                                    <a href="#" class="read-more-toggle" data-target="symptoms-{{ $visit->id }}" style="display: block; margin-top: 5px;">
                                                        <i class="fas fa-chevron-down"></i> Read More
                                                    </a>
                                                    <div class="full-text scrollable-text" id="symptoms-{{ $visit->id }}" style="display: none; margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 5px; max-height: 300px; overflow-y: auto; border: 1px solid #dee2e6; width: 100%;">
                                                        <div style="white-space: pre-wrap; word-wrap: break-word;">{{ $visit->symptoms }}</div>
                                                        <a href="#" class="read-less-toggle" data-target="symptoms-{{ $visit->id }}" style="float: right; font-size: 0.9em; margin-top: 5px; display: block; clear: both;">
                                                            <i class="fas fa-chevron-up"></i> Read Less
                                                        </a>
                                                    </div>
                                                @endif
                                            </div>
                                        </td>
                                        <td style="word-wrap: break-word; overflow-wrap: break-word;">
                                            <div class="visit-content">
                                                <span class="short-text" style="display: inline-block; width: 100%;">{{ Str::limit($visit->medical_notes ?? '', 100) }}</span>
                                                @if(strlen($visit->medical_notes ?? '') > 100)
                                                    <a href="#" class="read-more-toggle" data-target="notes-{{ $visit->id }}" style="display: block; margin-top: 5px;">
                                                        <i class="fas fa-chevron-down"></i> Read More
                                                    </a>
                                                    <div class="full-text scrollable-text" id="notes-{{ $visit->id }}" style="display: none; margin-top: 10px; padding: 10px; background-color: #f8f9fa; border-radius: 5px; max-height: 300px; overflow-y: auto; border: 1px solid #dee2e6; width: 100%;">
                                                        <div style="white-space: pre-wrap; word-wrap: break-word;">{{ $visit->medical_notes }}</div>
                                                        <a href="#" class="read-less-toggle" data-target="notes-{{ $visit->id }}" style="float: right; font-size: 0.9em; margin-top: 5px; display: block; clear: both;">
                                                            <i class="fas fa-chevron-up"></i> Read Less
                                                        </a>
                                                    </div>
                                                @endif
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                @else
                    <p>No visits recorded.</p>
                @endif
            </div>
        </div>

        <div class="card mt-4">
            <div class="card-header">
                <h5 class="card-title">Add New Visit</h5>
            </div>
            <div class="card-body">
                <form method="POST" action="{{ route('admin.patients.visits.store', $patient->id) }}">
                    @csrf
                    <div class="row">
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Visit Date <span class="text-danger">*</span></label>
                                <input type="date" name="visit_date" class="form-control" value="{{ date('Y-m-d') }}" required>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Symptoms <span class="text-danger">*</span></label>
                                <textarea name="symptoms" class="form-control" rows="3" required placeholder="Enter symptoms..."></textarea>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="mb-3">
                                <label class="form-label">Medical Notes</label>
                                <textarea name="medical_notes" class="form-control" rows="3" placeholder="Enter notes..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="text-end">
                        <button type="submit" class="btn btn-primary">Add New Visit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    .visit-content {
        position: relative;
    }
    .read-more-toggle, .read-less-toggle {
        color: #007bff;
        text-decoration: none;
        cursor: pointer;
        font-size: 0.9em;
    }
    .read-more-toggle:hover, .read-less-toggle:hover {
        color: #0056b3;
        text-decoration: underline;
    }
    .scrollable-text {
        animation: expandVertical 0.3s ease-out;
        line-height: 1.5;
    }
    @keyframes expandVertical {
        from { opacity: 0; max-height: 0; padding: 0; }
        to { opacity: 1; max-height: 300px; }
    }
    .fas {
        font-family: 'Font Awesome 5 Free';
        font-weight: 900;
        margin-right: 3px;
    }
    td {
        vertical-align: top;
        padding: 12px;
    }

    /* Chatbot Styles */
    #chatbot-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
    }

    #chatbot-toggle {
        background-color: #3d6b48;
        color: white;
        border: none;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        font-size: 22px;
        cursor: pointer;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
    }

    #chatbot-toggle:hover {
        background-color: #2d5240;
        transform: scale(1.1);
    }

    #chat-window {
        display: none;
        width: 380px;
        height: 500px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        overflow: hidden;
        flex-direction: column;
        position: absolute;
        bottom: 70px;
        right: 0;
        animation: fadeIn 0.3s ease;
    }

    #chat-header {
        background: #3d6b48;
        color: white;
        padding: 12px;
        text-align: center;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #chat-body {
        height: 380px;
        overflow-y: auto;
        padding: 15px;
        background: #f8f9fa;
        display: flex;
        flex-direction: column;
    }

    #chat-input {
        display: flex;
        padding: 12px;
        border-top: 1px solid #ddd;
        background: white;
    }

    #chat-input input {
        flex: 1;
        border: 1px solid #ddd;
        outline: none;
        padding: 10px;
        border-radius: 8px;
        background: #f9f9f9;
        font-size: 14px;
    }

    #chat-input input:focus {
        border-color: #3d6b48;
        background: white;
    }

    #chat-input button {
        background: #3d6b48;
        color: white;
        border: none;
        margin-left: 8px;
        padding: 10px 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    #chat-input button:hover {
        background: #2d5240;
    }

    .chat-message {
        margin-bottom: 12px;
        padding: 10px 14px;
        border-radius: 12px;
        max-width: 85%;
        word-wrap: break-word;
        line-height: 1.4;
        animation: messageSlide 0.3s ease;
    }
    .user { 
        background: #3d6b48; 
        color: white; 
        align-self: flex-end; 
        border-bottom-right-radius: 4px;
    }
    .bot { 
        background: #e8f4f1; 
        color: #2d5240; 
        align-self: flex-start;
        border-bottom-left-radius: 4px;
        border: 1px solid #d1e7dd;
    }

    .badge {
        font-size: 0.7em;
        padding: 4px 8px;
    }

    @keyframes fadeIn { 
        from { opacity: 0; transform: translateY(10px); } 
        to { opacity: 1; transform: translateY(0); } 
    }

    @keyframes messageSlide {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Scrollbar styling */
    #chat-body::-webkit-scrollbar {
        width: 6px;
    }

    #chat-body::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    #chat-body::-webkit-scrollbar-thumb {
        background: #c1c1c1;
        border-radius: 3px;
    }

    #chat-body::-webkit-scrollbar-thumb:hover {
        background: #a8a8a8;
    }
</style>

<div id="chatbot-container">
    <button id="chatbot-toggle"><i class="fas fa-robot"></i></button>
    <div id="chat-window">
        <div id="chat-header">
            <span>AI Medical Assistant</span>
            <span id="ai-indicator" class="badge bg-success">Online</span>
        </div>
        <div id="chat-body">
            <div class="chat-message bot">
                🤖 Hello! I'm your AI medical assistant. I can analyze symptoms, find similar cases, and check trends based on this patient's data.
            </div>
        </div>
        <div id="chat-input">
            <input type="text" id="chat-message" placeholder="Describe symptoms or ask about similar cases..." />
            <button id="chat-send"><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>
</div>

{{-- 
    IMPORTANT: You must include jQuery and Font Awesome CSS in your layouts/app.blade.php for this to work fully.
    Example:
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
--}}

<script>
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('chatbot-toggle');
    const windowEl = document.getElementById('chat-window');
    const sendBtn = document.getElementById('chat-send');
    const input = document.getElementById('chat-message');
    const body = document.getElementById('chat-body');
    const aiStatusBtn = document.getElementById('ai-status-btn');
    const aiIndicator = document.getElementById('ai-indicator');

    // Toggle chatbot window
    toggle.onclick = () => {
        const isVisible = windowEl.style.display === 'flex';
        windowEl.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible) {
            input.focus();
        }
    };

    // Append message to chat
    function appendMessage(text, sender) {
        const msg = document.createElement('div');
        msg.className = `chat-message ${sender}`;
        
        // Preserve line breaks and render markdown (basic attempt)
        let formattedText = text.replace(/\n/g, '<br>');
        
        // Basic Markdown to HTML conversion
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // bold
        formattedText = formattedText.replace(/•/g, '•'); // list item
        formattedText = formattedText.replace(/🔍/g, '🔍'); // emojis
        
        msg.innerHTML = formattedText;
        
        body.appendChild(msg);
        body.scrollTop = body.scrollHeight;
    }

    // Send message to chatbot
    async function sendMessage() {
        const message = input.value.trim();
        if (!message) return;
        
        appendMessage(message, 'user');
        input.value = '';
        input.disabled = true;
        sendBtn.disabled = true;

        // Show typing indicator
        const typingMsg = document.createElement('div');
        typingMsg.className = 'chat-message bot';
        typingMsg.innerHTML = '<em>🤖 Analyzing patient data with AI...</em>';
        typingMsg.id = 'typing-indicator';
        body.appendChild(typingMsg);
        body.scrollTop = body.scrollHeight;

        try {
            const res = await fetch('{{ route("chatbot.respond") }}', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': '{{ csrf_token() }}'
                },
                body: JSON.stringify({ 
                    message, 
                    patient_id: '{{ $patient->id }}' 
                })
            });

            const data = await res.json();
            
            // Remove typing indicator
            document.getElementById('typing-indicator')?.remove();
            
            // Show response (use 'reply' key)
            appendMessage(data.reply || 'No response.', 'bot');
            
            // If note (fallback), show it
            if (data.note) {
                appendMessage(`<em>${data.note}</em>`, 'bot');
            }
            
        } catch (error) {
            document.getElementById('typing-indicator')?.remove();
            appendMessage('🤖 Error: Could not connect to AI. Check network or API key.', 'bot');
        } finally {
            input.disabled = false;
            sendBtn.disabled = false;
            input.focus();
        }
    }

    // Event listeners
    sendBtn.onclick = sendMessage;
    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') sendMessage();
    });

    // Read More/Less functionality for visits (Existing Code)
    document.querySelectorAll('.read-more-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const shortText = this.previousElementSibling;
            const fullDiv = document.getElementById(targetId);

            shortText.style.display = 'none';
            fullDiv.style.display = 'block';
            this.style.display = 'none';
            fullDiv.querySelector('.read-less-toggle').style.display = 'block';
        });
    });

    document.querySelectorAll('.read-less-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const shortText = this.closest('.visit-content').querySelector('.short-text');
            const fullDiv = document.getElementById(targetId);
            const readMore = fullDiv.previousElementSibling;

            shortText.style.display = 'block';
            fullDiv.style.display = 'none';
            this.style.display = 'none';
            readMore.style.display = 'block';
        });
    });

    // Close chat when clicking outside
    document.addEventListener('click', function(e) {
        if (windowEl.style.display === 'flex' && 
            !windowEl.contains(e.target) && 
            !toggle.contains(e.target)) {
            windowEl.style.display = 'none';
        }
    });
});
</script>

@endsection