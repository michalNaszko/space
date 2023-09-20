<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Create Post</title>
</head>
<body>
    <form action="createPost" method="POST">
        @csrf <!-- {{ csrf_field() }} -->
        <div class="modal-header">
            <h5 class="modal-title text-break" id="createNoteModalLabel">
                <div class="form-group">
                    <textarea name="title" placeholder="Note title" class="form-control" id="titleArea" rows="1"></textarea>
                </div>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-break">
            <div class="form-group">
                <textarea name="text" placeholder="Note content" class="form-control" id="noteArea" rows="3"></textarea>
            </div>
        </div>
        <div class="modal-body text-break">
            <div class="form-group">
                <textarea name="tags" placeholder="Tags" class="form-control" id="noteArea" rows="3"></textarea>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button class="btn btn-primary" type="submit">Save</button>
        </div>
    </form>
</body>
</html>
