from dataclasses import field
from email import contentmanager
from django import forms
from .models import Comment, File


class CommentForm(forms.ModelForm):
    content = forms.CharField(
        label="",
        widget=forms.Textarea(
            attrs={
                "class": "form-control",
                "placeholder": "Comment here !",
                "rows": 4,
                "cols": 50,
            }
        ),
    )

    class Meta:
        model = Comment
        fields = ["content"]


class FileForm(forms.ModelForm):
    content = forms.CharField(
        label="",
        widget=forms.Textarea(
            attrs={
                "class": "form-control"
                "placeholder": "Paste your code here!"
            }
        )
    )
    
    class Meta:
        model = File
        field = ["content"]