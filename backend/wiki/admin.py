from django.contrib import admin
from wiki.models import CodeSample, CodeTitle

# Register your models here.


class CodeSampleAdmin(admin.ModelAdmin):
    pass


class CodeTitleAdmin(admin.ModelAdmin):
    pass


admin.site.register(CodeSample, CodeSampleAdmin)
admin.site.register(CodeTitle, CodeTitleAdmin)
